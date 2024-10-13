import { ReactNode } from "react";
import Welcome from "../welcome";

export type BackgroundProp = {
  children?: ReactNode;
  page?: "login" | "register";
};

const Background = ({ children, page }: BackgroundProp) => {
  return (
    <div className="w-full h-screen overflow-hidden relative ">
      <div
        key={page + "-wel"}
        className={` z-10 absolute top-[30%] -translate-y-[50%]
          animate-[translateItem_2s_ease-in-out_forwards] ${
            page === "login" ? " right-16 " : "  left-16 "
          } `}
      >
        <Welcome />
      </div>
      <div
        key={page}
        className={`
          w-full h-full absolute top-0 bg-rose-700 z-0 
          ${
            page === "login"
              ? " animate-background "
              : " animate-background animate-reverse "
          }`}
      ></div>
      <div
        key={page + "-auth"}
        className={` z-10 absolute top-[30%] -translate-y-1/2
          animate-[translateItem_2s_ease-in-out_forwards]   ${
            page === "register" ? " right-16 " : " left-16 "
          } `}
      >
        {children}
      </div>
    </div>
  );
};

export default Background;
