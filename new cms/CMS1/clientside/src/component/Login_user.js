import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { getAll } from "../service/api";
import { useCookies } from "react-cookie";

import { Link } from "react-router-dom";


function Login_user() {
 
    const [userData, setUserData] = useState();
    // eslint-disable-next-line
    const [cookies, setCookie] = useCookies(['user']);
    let token_value = cookies.jwtoken;
       useEffect(()=>{
        getAllUser();
       
      },[]);
    const getAllUser = async() => {
       const user_data = await getAll( token_value);
           setUserData(user_data);

  };
  
  return (
    <>
      <div>
        <div className="row">
          <div className="col-lg-12">
            <Navbar />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <Sidebar />
          </div>
          <div className="col-lg-9">
            <h3 className="text-center">Login user Details </h3>
            <div>
              {!userData ? (
                <div className="card text-center">
                  <div className="card-header">data not found</div>
                </div>
              ) : (
                <table className="table">
                  <thead>
                    <tr>
                      <th>S.no</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>DOB</th>
                      <th>wallet</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    {userData.data.map((value, id) => (
                      <tr key={id}>
                        <td>{id + 1}</td>
                        <td> {value.fname} </td>
                        <td> {value.lname} </td>
                        <td> {value.email} </td>
                        <td> {value.phone} </td>
                        <td> {value.dob} </td>
                        <td>
                          <button className="btn btn-primary ">
                            <Link
                              to={`/Wallet/${value._id}`}
                              style={{ textDecoration: "none", color: "#fff" }}
                            >
                              Detail
                            </Link>
                          </button>
                          </td>
                        </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login_user;
