import Login from "./login";
import Register from "./register";

import Background from "./component/background";
import { useState } from "react";

const Auth = () => {
  const [page, setPage] = useState<"login" | "register">("login");

  return (
    <Background page={page}>
      {page === "login" ? (
        <Login setPage={() => setPage("register")} />
      ) : (
        <Register setPage={() => setPage("login")} />
      )}
    </Background>
  );
};

export default Auth;
