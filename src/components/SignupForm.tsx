import React, { useState, FormEvent, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signup } from "../actions/authActions";
import { useAppSelector } from "../utilities/typedReduxHooks";

const formDefault = {
  email: "",
  username: "",
  first_name: "",
  last_name: "",
  password: "",
  password_confirmation: "",
};

function SignupForm() {
  const [formData, setFormData] = useState(formDefault);
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
    dispatch(signup(formData));
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubtmit}>
      <legend>Sign Up</legend>
      {error.non_field_errors ? (
        error.non_field_errors.map((err: any, idx: number) => (
          <div key={idx} className="alert alert-danger">
            {err}
          </div>
        ))
      ) : error.message ? (
        <div className="alert alert-danger">{error.message}</div>
      ) : null}
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control"
          name="email"
          id="email"
          aria-describedby="emailHelp"
          onChange={handleChange}
          value={formData.email}
          required={true}
        />
        {error.email ? <p>{error.email}</p> : null}
      </div>

      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          className="form-control"
          id="username"
          name="username"
          onChange={handleChange}
          value={formData.username}
          required={true}
        />
        {error.username ? <p>{error.username}</p> : null}
      </div>

      <div className="form-group">
        <label htmlFor="first_name">First Name</label>
        <input
          type="text"
          className="form-control"
          id="first_name"
          name="first_name"
          onChange={handleChange}
          value={formData.first_name}
          required={true}
        />
      </div>

      <div className="form-group">
        <label htmlFor="last_name">Last name</label>
        <input
          type="text"
          className="form-control"
          id="last_name"
          name="last_name"
          onChange={handleChange}
          value={formData.last_name}
          required={true}
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
          required={true}
        />
        {error.password ? <p>{error.password}</p> : null}
      </div>

      <div className="form-group">
        <label htmlFor="password_confirmation">Password Confirmation</label>
        <input
          type="password"
          className="form-control"
          id="password_confirmation"
          name="password_confirmation"
          onChange={handleChange}
          value={formData.password_confirmation}
          required={true}
        />
      </div>
      <p>
        Already have a account?
        <Link className="badge badge-dark" to="/login">
          Login here.
        </Link>
      </p>
      <button type="submit" className="btn btn-primary">
        Register
      </button>
    </form>
  );
}

export default SignupForm;
