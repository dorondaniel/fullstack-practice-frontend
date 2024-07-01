import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function HomePage() {

  let navigate = useNavigate();
  const [userdata, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const res = await axios.get("http://localhost:8080/userdata");
    setUsers(res.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/user/${id}`);
    loadUsers();
  }

  const editUser = async (id) => {
    navigate(`/edit/${id}`);
  }

  const viewUser = async (id) => {
    navigate(`/view/${id}`);
  }

  return (
    <div className="container">
      <div className="py-4 m-3">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">UserName</th>
              <th scope="col">E-mail</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {userdata.map((user, index) => (
              <tr className="align-middle" key={user.id}>
                <th scope="row">{index + 1}</th>
                <td className="align-middle">{user.name}</td>
                <td className="align-middle">{user.username}</td>
                <td className="align-middle">{user.email}</td>
                <td className="align-middle">
                  <div className="d-inline-block mx-2 my-1">
                    <button type="button" className="btn btn-outline-secondary" onClick={() => viewUser(user.id)}>
                      View
                    </button>
                  </div>
                  <div className="d-inline-block mx-2 my-1">
                    <button type="button" className="btn btn-outline-primary" onClick={() => editUser(user.id)}>
                      Edit
                    </button>
                  </div>
                  <div className="d-inline-block mx-2 my-1">
                    <button type="button" className="btn btn-danger" onClick={() => deleteUser(user.id)}>
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
