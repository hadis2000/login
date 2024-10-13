import { ReactNode } from "react";

export type BtnProp = {
  children?: ReactNode;
  onClick?: () => void;
};

const Btn = ({ children, onClick }: BtnProp) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        if (onClick) {
          onClick();
        }
      }}
      className="w-full bg-rose-700 text-white text-center p-2 rounded-full focus:animate-btn"
    >
      {children}
    </button>
  );
};

export default Btn;
