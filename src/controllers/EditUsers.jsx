import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function EditUsers() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const res = await axios.get(`http://localhost:8080/userdata/${id}`);
    setUser(res.data);
  };

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/userdata/${id}`, user);
    navigate("/");
  };

  return (
    <div className="container myfont">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded shadow p-4 mt-2">
          <h3 className="text-center m-2">Edit User</h3>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="my-3">
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

            <div className="my-3">
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
              Update
            </button>
            <button
              type="button"
              className="btn btn-outline-danger mx-3"
              onClick={() => navigate("/")}
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
