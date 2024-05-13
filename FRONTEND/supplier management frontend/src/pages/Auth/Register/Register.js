import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Link } from "react-router-dom";
function Register() {
  const history = useNavigate();
  const [user, setUser] = useState({
    name: "",
    gmail: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest()
      .then(() => {
        alert("Register Success..!");
        history("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const sendRequest = async () => {
    await axios
      .post("http://localhost:3001/register", {
        name: String(user.name),
        gmail: String(user.gmail),
        password: String(user.password),
      })
      .then((res) => res.data);
  };
  return (
    <div className="bkimg_add">
      <div>
        <div className="disbox">
          <div className="diboxne">
            <div className="boctw">
              <form onSubmit={handleSubmit}>
                <label className="lble_log">Name</label>
                <br></br>
                <input
                  className="input_log"
                  type="text"
                  value={user.name}
                  onChange={handleInputChange}
                  name="name"
                  required
                ></input>
                <br></br>
                <br></br>
                <label className="lble_log">Gmail</label>
                <br></br>
                <input
                  className="input_log"
                  type="email"
                  value={user.gmail}
                  onChange={handleInputChange}
                  name="gmail"
                  required
                ></input>
                <br></br>
                <br></br>
                <label className="lble_log">Password</label>
                <br></br>
                <input
                  className="input_log"
                  type="Password"
                  value={user.password}
                  name="password"
                  onChange={handleInputChange}
                  required
                ></input>
                <br></br>
                <br></br>
                <button className="log_btn">Register</button>
              </form>
              <div>
                <p className="gin">
                  You Don't Have Account Plase{" "}
                  <Link to="/" className="gin1">
                    Login
                  </Link>{" "}
                  Here..
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
