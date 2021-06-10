import React from "react";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";

interface Props {
  match: any;
}
const LoginSignupPage: React.FC<Props> = (props) => {
  const { parameter } = props.match.params;
  return (
    <div className="auth">
      <h1>Hi there</h1>
      {parameter == "login" ? <LoginForm /> : <SignupForm />}
    </div>
  );
};

export default LoginSignupPage;
