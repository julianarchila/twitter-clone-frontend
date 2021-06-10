import React, { ChangeEvent, FormEvent, useState } from "react";
import { useAppDispatch } from "../utilities/typedReduxHooks";
import { login } from "../actions/authActions";

const formDataDefault = {
  email: "",
  password: "",
};

function LoginForm() {
  const [formData, setFormData] = useState(formDataDefault);
  const dispatch = useAppDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubtmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(formData);
    dispatch(login(formData));
    setFormData(formDataDefault);
  };

  return (
    <form onSubmit={handleSubtmit}>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
          aria-describedby="emailHelp"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          onChange={handleChange}
          value={formData.password}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  );
}

export default LoginForm;
