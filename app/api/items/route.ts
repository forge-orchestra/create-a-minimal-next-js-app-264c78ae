import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient, Item } from '@prisma/client';
import Cors from 'cors';

const prisma = new PrismaClient();
const cors = Cors({
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
});

function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: Function) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

type Data = {
  message?: string;
  items?: Item[];
  item?: Item;
};

async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  await runMiddleware(req, res, cors);

  try {
    switch (req.method) {
      case 'GET':
        const items = await prisma.item.findMany();
        res.status(200).json({ items });
        break;
      case 'POST':
        const { name, description } = req.body;
        if (!name || !description) {
          res.status(400).json({ message: 'Name and description are required' });
          return;
        }
        const newItem = await prisma.item.create({
          data: { name, description },
        });
        res.status(201).json({ item: newItem });
        break;
      case 'PUT':
        const { id, updateName, updateDescription } = req.body;
        if (!id || !updateName || !updateDescription) {
          res.status(400).json({ message: 'ID, updateName and updateDescription are required' });
          return;
        }
        const updatedItem = await prisma.item.update({
          where: { id },
          data: { name: updateName, description: updateDescription },
        });
        res.status(200).json({ item: updatedItem });
        break;
      case 'DELETE':
        const { deleteId } = req.body;
        if (!deleteId) {
          res.status(400).json({ message: 'ID is required for deletion' });
          return;
        }
        await prisma.item.delete({
          where: { id: deleteId },
        });
        res.status(204).end();
        break;
      default:
        res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

export default handler;