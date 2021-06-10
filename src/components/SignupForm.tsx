import React from "react";

function SignupForm() {
  return (
    <form>
      <legend>Sign Up</legend>

      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
        />
      </div>

      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input type="text" className="form-control" id="username" />
      </div>

      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input type="text" className="form-control" id="firstName" />
      </div>

      <div className="form-group">
        <label htmlFor="lastName">Last name</label>
        <input type="text" className="form-control" id="lastName" />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" className="form-control" id="password" />
      </div>

      <div className="form-group">
        <label htmlFor="passwordConfirmation">Password Confirmation</label>
        <input
          type="password"
          className="form-control"
          id="passwordConfirmation"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Register
      </button>
    </form>
  );
}

export default SignupForm;
