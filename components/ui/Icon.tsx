import { FC } from 'react';
import { LucideProps, Icon as LucideIcon } from 'lucide-react';

interface IconProps extends LucideProps {
  name: string;
  size?: number;
  color?: string;
  className?: string;
}

const Icon: FC<IconProps> = ({ name, size = 24, color = 'currentColor', className, ...props }) => {
  const IconComponent = LucideIcon[name];

  if (!IconComponent) {
    console.error(`Icon "${name}" does not exist in Lucide React`);
    return null;
  }

  return (
    <span role="img" aria-label={name} className={`inline-flex ${className}`}>
      <IconComponent size={size} color={color} {...props} />
    </span>
  );
};

export default Icon;