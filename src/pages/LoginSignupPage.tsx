import React, { useEffect } from "react";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";
import { useAppSelector } from "../utilities/typedReduxHooks";

interface Props {
  match: any;
  history: any;
}
const LoginSignupPage: React.FC<Props> = (props) => {
  const { parameter } = props.match.params;
  const auth = useAppSelector((state) => state.auth);
  const { user } = auth;
  useEffect(() => {
    if (user) {
      props.history.push("/");
    }
  }, [user, props.history]);
  return (
    <div className="auth">
      <h1>Hi there</h1>
      {parameter === "login" ? <LoginForm /> : <SignupForm />}
    </div>
  );
};

export default LoginSignupPage;
