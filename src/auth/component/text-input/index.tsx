import { ReactNode } from "react";

export type TextInputProp = {
  icon?: ReactNode;
  placeholder?: string;
};

const TextInput = ({ icon, placeholder }: TextInputProp) => {
  return (
    <div className="w-full border-b-2 border-rose-700 flex items-center justify-between py-1">
      <input
        type="text"
        className=" border-0 w-full h-12 focus:outline-none bg-transparent
        focus:placeholder:absolute focus:placeholder:top-0 "
        placeholder={placeholder}
      />
      <span className="text-rose-700">{icon}</span>
    </div>
  );
};

export default TextInput;
