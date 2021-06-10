import React, { ChangeEvent, FormEvent, useState } from "react";
import { useSelector } from "react-redux";

const formDataDefault = {
  email: "",
  password: "",
};

function LoginForm() {
  const [formData, setFormData] = useState(formDataDefault);
  const state = useSelector((state) => state);
  console.log(state);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubtmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(formData);

    setFormData(formDataDefault);
  };

  // useEffect(() => {}, []);

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
