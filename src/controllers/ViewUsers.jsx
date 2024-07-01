import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function ViewUsers() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [users, setUser] = useState(null);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/userdata/${id}`);
      setUser(res.data);
    } catch (error) {
      console.error("Error loading user:", error);
    }
  };

  return (
    <div className="container myfont">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded shadow p-4 mt-4">
          <h2>User Details</h2>
          <table className="table border shadow mt-5">
            <tbody>
              <tr>
                <th scope="row">ID</th>
                <td>{users?.id}</td>
              </tr>
              <tr>
                <th scope="row">Name</th>
                <td>{users?.name}</td>
              </tr>
              <tr>
                <th scope="row">Username</th>
                <td>{users?.username}</td>
              </tr>
              <tr>
                <th scope="row">E-mail</th>
                <td>{users?.email}</td>
              </tr>
            </tbody>
          </table>
          <button className="btn btn-danger mt-5 mb-3" onClick={() => navigate("/")}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
