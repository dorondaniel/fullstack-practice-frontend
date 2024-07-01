import React, { useState } from "react";
import "../Font.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddUsers() {
  let navigate = useNavigate();

  const [users, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = users;

  const onInputChange = (e) => {
    setUser({ ...users, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user", users);
    navigate("/");
  };

  const onCancel = (e) => {
    e.preventDefault();
    setUser({
      name: "",
      username: "",
      email: "",
    });
  };

  return (
    <div className="container myfont">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded shadow p-4 mt-2">
          <h3 className="text-center m-2">Register User</h3>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mt-4">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter user's name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="my-3">
              <label htmlFor="Username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter username"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="my-3 mb-4">
              <label htmlFor="Email" className="form-label">
                E-Mail
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter user e-mail"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-success mx-3">
              Register
            </button>
            <button
              type="button"
              className="btn btn-outline-danger mx-3"
              onClick={onCancel}
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
