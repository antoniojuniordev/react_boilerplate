import * as IconsSax from 'iconsax-react';

interface Props {
  name: keyof typeof IconsSax;
  size: string;
}

export default function Icons({ name, size }: Props) {
  const DynamicIcon = IconsSax[name];

  return <DynamicIcon size={size} />;
}
