import * as IconsSax from 'iconsax-react';

interface Props {
  name: keyof typeof IconsSax;
  size: string;
  color?: string;
}

export default function Icons({ name, size, color }: Props) {
  const DynamicIcon = IconsSax[name];

  return <DynamicIcon size={size} color={color} />;
}
