import { ReactNode } from "react";

type ButtonProperties = {
  children: ReactNode;
};

export const Button = ({ children }: ButtonProperties) => {
  return (
    <button
      style={{
        height: "50px"
      }}
    >
      {children}
    </button>
  );
};
