import Btn from "../component/btn";
import MessageText from "../component/message-text";
import TextInput from "../component/text-input";
import Title from "../component/title";
import { FaLock, FaUser } from "react-icons/fa";

export type LoginProp = {
  setPage: () => void;
};

const Login = ({ setPage }: LoginProp) => {
  return (
    <div className="w-96 flex flex-col justify-between items-center gap-4">
      <Title>Login</Title>
      <TextInput placeholder="Username" icon={<FaUser />} />
      <TextInput placeholder="Password" icon={<FaLock />} />
      <Btn>Login</Btn>
      <MessageText goTextFunc={setPage} goText="Sign Up">
        Dont have an account?
      </MessageText>
    </div>
  );
};

export default Login;
