import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import Btn from "../component/btn";
import MessageText from "../component/message-text";
import TextInput from "../component/text-input";
import Title from "../component/title";

export type RegisterProp = {
  setPage: () => void;
};

const Register = ({ setPage }: RegisterProp) => {
  return (
    <div className="w-96 flex flex-col justify-between items-center gap-4">
      <Title>Sign Up</Title>
      <TextInput placeholder="Username" icon={<FaUser />} />
      <TextInput placeholder="Email" icon={<FaEnvelope />} />
      <TextInput placeholder="Password" icon={<FaLock />} />
      <Btn>Sign Up</Btn>
      <MessageText goTextFunc={setPage} goText="Login">
        Already have an account?
      </MessageText>
    </div>
  );
};

export default Register;
