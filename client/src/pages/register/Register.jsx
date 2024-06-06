import { Link } from "react-router-dom";
import "./register.scss";
import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });

  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs);
    } catch (error) {
      setErr(error.response.data);
    }
  };

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Lebo Social.</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos nobis
            ex cumque eveniet itaque perspiciatis vitae repellat deserunt
            laborum consequatur eum repudiandae.
          </p>
          <span>Do you have an account ?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              name="username"
              type="text"
              placeholder="Username"
            />
            <input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="Email"
            />
            <input
              onChange={handleChange}
              name="password"
              type="password"
              placeholder="Password"
            />
            <input
              onChange={handleChange}
              name="name"
              type="text"
              placeholder="Name"
            />
            {err && err}
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}
