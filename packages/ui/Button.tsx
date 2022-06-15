import { ReactNode } from "react";

type ButtonProperties = {
  children: ReactNode;
};

export const Button = ({ children }: ButtonProperties) => {
  return (
    <button>{children}</button>
  );
};
