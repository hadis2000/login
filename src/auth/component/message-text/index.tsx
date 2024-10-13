import { ReactNode } from "react";

export type MessageTextProp = {
  children?: ReactNode;
  goText?: string;
  goTextFunc?: () => void;
};

const MessageText = ({ children, goText, goTextFunc }: MessageTextProp) => {
  return (
    <p className="text-sm font-medium flex justify-between items-center gap-1">
      <span>{children}</span>
      <span
        onClick={(e) => {
          e.preventDefault();
          if (goTextFunc) goTextFunc();
        }}
        className="text-rose-400 cursor-pointer"
      >
        {goText}
      </span>
    </p>
  );
};

export default MessageText;
