import { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'cors';

// Initialize the cors middleware
const cors = Cors({
  methods: ['GET', 'POST', 'OPTIONS'],
});

// Helper method to wait for a middleware to execute before continuing
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

// Define TypeScript types for request and response
interface User {
  id: number;
  name: string;
  email: string;
}

interface ErrorResponse {
  error: string;
}

interface SuccessResponse {
  data: User | User[];
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<SuccessResponse | ErrorResponse>) {
  await runMiddleware(req, res, cors);

  try {
    switch (req.method) {
      case 'GET':
        // Fetch users logic here
        const users: User[] = [{ id: 1, name: 'John Doe', email: 'john@example.com' }];
        res.status(200).json({ data: users });
        break;
      
      case 'POST':
        // Validate input
        const { name, email } = req.body;
        if (!name || !email) {
          res.status(400).json({ error: 'Name and email are required' });
          return;
        }
        
        // Create user logic here
        const newUser: User = { id: Date.now(), name, email };
        res.status(201).json({ data: newUser });
        break;
      
      default:
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}