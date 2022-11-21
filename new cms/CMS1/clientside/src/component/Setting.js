import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { getAdmin } from "../service/api";

import { useCookies } from 'react-cookie';
function Setting() {
  const imagePath = "https://cdn1.vectorstock.com/i/thumb-large/18/05/businessman-or-programmer-avatar-profile-userpic-vector-7471805.jpg";

  const [userData, setAdmin] = useState();
 // eslint-disable-next-line
  const [cookies, setCookie] = useCookies(['user']);
  let token_value=cookies.jwtoken;
  useEffect(() => {
    getAdminData();
  }, []);

  const getAdminData = async () => {
    const admin_data = await getAdmin(token_value);
    setAdmin(admin_data.data);
   // console.log(admin_data);
    //console.log(admin_data.data[0].fname);
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
          <div>

            
          <h3 className="text-center">Admin Details </h3> 
            <div>


              { !userData ? (


               
               <div className="row mt-5">
                  <div className="card text-center">
                    <div className="card-header">data not found</div>
                  </div>
                </div>

              ) : (
                
              
               
                  <div className="card m-2   " >  
                  <div >
                    <div className="row">
                        <div className="col-lg-6 text-center">  
                        <img alt="alternative" src= {imagePath} className="card-img-center" /> </div>
                        <div className="col-lg-6 px-5 pb-3">   
                                <p className="card-text pt-5"> <span className="h5  "> Name:</span><span className="h5 px-4">{userData.name} </span></p> 
                                <p className="card-text "> <span className="h5 ">Email:</span> <span className="h5 px-4">{userData.email} </span> </p>
                                <p className="card-text "> <span className="h5 ">Phone:</span> <span className="h5 px-4"> {userData.phone}</span></p>
                                <p className="card-text "><span className="h5 ">DOB:</span> <span className="h5 px-4"> {userData.dob}</span></p>
                        
                         </div>
                    </div>
                    
                </div>
                         
              </div>
              
             
              )}
            </div>
          </div>
        </div>
      </div>
        </div>
       
    </>
  );
}

export default Setting;