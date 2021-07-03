import React, { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../actions/authActions";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../utilities/typedReduxHooks";

const formDataDefault = {
  email: "",
  password: "",
};

function LoginForm() {
  const [formData, setFormData] = useState(formDataDefault);
  const dispatch = useDispatch();
  const state = useAppSelector((state) => state.auth);
  const error = state.error;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubtmit = (event: FormEvent) => {
    event.preventDefault();
    dispatch(login(formData));
  };

  return (
    <form onSubmit={handleSubtmit}>
      <legend>Login</legend>
      {error.non_field_errors ? (
        error.non_field_errors.map((err: any, idx: number) => (
          <div key={idx} className="alert alert-danger">
            {err}
          </div>
        ))
      ) : error.message && (
        <div className="alert alert-danger">{error.message}</div>
      )}

      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-input"
          id="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
          aria-describedby="emailHelp"
          placeholder="Email"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-input"
          id="password"
          name="password"
          onChange={handleChange}
          value={formData.password}
          placeholder="Password"
        />
        {error.password && <p>{error.password}</p>}
      </div>
      <p>
        Don't have a account?
        <Link className="badge badge-dark" to="/signup">
          Register Here.
        </Link>
      </p>
      <button type="submit" className="btn btn-primary register-button">
        Login
      </button>
    </form>
  );
}

export default LoginForm;
