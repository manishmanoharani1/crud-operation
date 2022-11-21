import React, { useState } from 'react'
import Navbar from './Navbar';
import { addUser } from '../service/api';
import { useNavigate } from 'react-router-dom';
function Register() {
  const initial = {
    name: '',
    email: '',
    password: ''

  }
  const [user, setUser] = useState(initial);
  const navigate = useNavigate();
  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("user add", user);
    await addUser(user);
    navigate('/');

  }
  return (
    <>
      <Navbar />
      <center>
        <h1>Registration User</h1>
        <div className="container">
          <form onSubmit={handleSubmit} >

            <div className="row mt-5">
              <div className="col-lg-4"></div>
              <div className="col-lg-4">
                <label>Username</label>
                <input type="text"
                  onChange={(e) => onValueChange(e)}
                  name="name"
                  className="form-control" />
              </div>
              <div className="col-lg-4"></div>
            </div>

            <div className="row mt-5">
              <div className="col-lg-4"></div>
              <div className="col-lg-4">
                <label>Email</label>
                <input type="text"
                  onChange={(e) => onValueChange(e)}
                  name="email"
                  className="form-control" />
              </div>
              <div className="col-lg-4"></div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-4"></div>
              <div className="col-lg-4">
                <label>Password</label>
                <input type="password"
                  onChange={(e) => onValueChange(e)}
                  name="password"
                  className="form-control" />
              </div>
              <div className="col-lg-4"></div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-5"></div>
              <div className="col-lg-2">
                <input
                  type="submit"
                  value="Submit Here"
                  className="btn btn-primary"
                />
              </div>
              <div className="col-lg-5"></div>
            </div>

          </form>
        </div>
      </center>
    </>
  )
}

export default Register