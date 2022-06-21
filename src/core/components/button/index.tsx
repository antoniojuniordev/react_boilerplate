interface ButtonProps {
  id: string;
}

function Button(props: ButtonProps) {
  return <button {...props} />;
}

export default Button;
