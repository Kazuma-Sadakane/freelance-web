export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  label: string;
}

export const Button: React.FC<ButtonProps> = ({label, ...props}) => {
  return <button {...props}>{label}</button>;
};
