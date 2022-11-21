import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useParams } from "react-router-dom";
import { getAddressDetail } from "../service/api";
import { useCookies } from 'react-cookie';
// import { Link } from "react-router-dom";
function AddressDetail() {
  const [addressData, setAddressDetail] = useState();

  // eslint-disable-next-line
  const [cookies, setCookie] = useCookies(['user']);
  let token_value=cookies.jwtoken;
 
  let { id } = useParams();
  //console.log(id);
  useEffect(() => {
    getAddress();

  }, []);
  const getAddress = async () => {
    const address_detail_data = await getAddressDetail(id, token_value);
    setAddressDetail(address_detail_data);
    //console.log(address_detail_data.data);
   // console.log(address_detail_data.data);
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
          <div className="col-lg-9  ">
            
            <div>

              { !addressData ? (

                <div className="row mt-5">
                  <div className="card text-center">
                    <div className="card-header">data not found</div>
                  </div>
                </div>
              ) : (
                
                  <div >
                  <div className="card m-5 p-5 bg-primary" style={{"width":" 50rem", "alignSelf": "center"}}>
                 
                  <div className="card-body row">
                  <h5 className="card-title col-sm" style={{ "color": "#fff"}}>Name</h5>
                   <p className="card-text col-sm" style={{ "color": "#fff"}}> {addressData.data.name}</p>
                  </div>

                  <div className="card-body row">
                  <h5 className="card-title col-sm" style={{ "color": "#fff"}}>phone</h5>
                   <p className="card-text col-sm" style={{ "color": "#fff"}}> {addressData.data.phone}</p>
                  </div>

                  <div className="card-body row">
                  <h5 className="card-title col-sm" style={{ "color": "#fff"}}>Address</h5>
                   <p className="card-text col-sm" style={{ "color": "#fff"}}> {addressData.data.address}</p>
                  </div>

                  <div className="card-body row">
                  <h5 className="card-title col-sm" style={{ "color": "#fff"}}>City</h5>
                   <p className="card-text col-sm" style={{ "color": "#fff"}}> {addressData.data.city}</p>
                  </div>

                  <div className="card-body row">
                  <h5 className="card-title col-sm" style={{ "color": "#fff"}}>State</h5>
                   <p className="card-text col-sm" style={{ "color": "#fff"}}> {addressData.data.state}</p>
                  </div>

                  <div className="card-body row">
                  <h5 className="card-title col-sm" style={{ "color": "#fff"}}>Country</h5>
                   <p className="card-text col-sm" style={{ "color": "#fff"}}> {addressData.data.country}</p>
                  </div>
  
                  </div>
                  </div>
                
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddressDetail;
