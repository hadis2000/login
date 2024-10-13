import { ReactNode } from "react";

export type TitleProp = {
  children?: ReactNode;
};

const Title = ({ children }: TitleProp) => {
  return (
    <h3 className="text-rose-700 text-2xl font-bold relative p-2">
      {children}

      <div className="absolute bottom-0 left-[50%] -translate-x-[50%] w-1/2 border-b-4 border-rose-700"></div>
    </h3>
  );
};

export default Title;
