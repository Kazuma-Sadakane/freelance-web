import {ReactNode} from 'react';

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({children, ...props}) => {
  return <button {...props}>{children}</button>;
};

export default Button;
