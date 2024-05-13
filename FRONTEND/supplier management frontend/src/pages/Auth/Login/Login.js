import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import "../Auth.css";
function Login() {
  const history = useNavigate();
  const [user, setUser] = useState({
    name: "",
    gmail: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await sendRequest();
      if (response.status === "ok") {
        alert("Login Success..!");
        history("/supdash");
      } else {
        alert("Plase Enter Valid Gmail & Password..!");
      }
    } catch (err) {
      alert("error" + err.message);
    }
  };

  const sendRequest = async () => {
    return await axios
      .post("http://localhost:3001/login", {
        gmail: user.gmail,
        password: user.password,
      })
      .then((res) => res.data);
  };

  return (
    <div  className="bkimg_add">
      <div className="disbox">
        <div className="diboxne">
          
          <div className="boctw">
            <form onSubmit={handleSubmit}>
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
              <button className="log_btn">Login</button>
            </form>
            <div>
              <p className="gin">
                You Don't Have Account Plase{" "}
                <Link to="/regi" className="gin1">
                  Register
                </Link>{" "}
                Here..
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
