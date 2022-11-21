import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { editAddress, getAddressDetail } from "../service/api";
import { useNavigate, useParams } from "react-router-dom";
import { useCookies } from 'react-cookie';
function EditAddress() {
  const initial = {
    address: "",
    city: "",
    state: "",
    country: "",
  };
  const [address, setAddress] = useState(initial);
  // eslint-disable-next-line
  const [cookies, setCookie] = useCookies(['user']);
  let token_value=cookies.jwtoken;
  let { id } = useParams();
  useEffect(() => {
    loadAddressDetail();
  }, []);

 // console.log(id);
  const loadAddressDetail = async () => {
    const response = await getAddressDetail(id,token_value);
   // console.log(response);
    setAddress(response.data);
  };

  const navigate = useNavigate();

  const onValueChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const edithandleSubmit = async (e) => {
    e.preventDefault();

    await editAddress(address, id,token_value) ;
    navigate("/address");
  };
  return (
    <>
      <div>
        <div className="row">
          <div className="col-lg-12">
            <Navbar />{" "}
          </div>
        </div>

        <div className="row">
        <div className="col-lg-3">
            <Sidebar />{" "}
          </div>
          
          <div className="container  col-lg-9">
            <form onSubmit={edithandleSubmit}>
              <center>


              <div className="row mt-4 mb-4">
                  <div className="col-lg-4">
                    <label className="form-label">Name</label>
                  </div>
                  <div className="col-lg-4">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={address.name}
                      onChange={(e) => onValueChange(e)}
                    />
                  </div>
                  <div className="col-lg-4"></div>
                </div>

                <div className="row mt-4 mb-4">
                  <div className="col-lg-4">
                    <label className="form-label">phone</label>
                  </div>
                  <div className="col-lg-4">
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      value={address.phone}
                      onChange={(e) => onValueChange(e)}
                    />
                  </div>
                  <div className="col-lg-4"></div>
                </div>




                <div className="row mt-4 mb-4">
                  <div className="col-lg-4">
                    <label className="form-label">Address</label>
                  </div>
                  <div className="col-lg-4">
                    <input
                      type="text"
                      className="form-control"
                      name="address"
                      value={address.address}
                      onChange={(e) => onValueChange(e)}
                    />
                  </div>
                  <div className="col-lg-4"></div>
                </div>

                <div className="row mt-4 mb-4">
                  <div className="col-lg-4">
                    <label className="form-label">City</label>
                  </div>
                  <div className="col-lg-4">
                    <input
                      type="text"
                      className="form-control"
                      name="city"
                      value={address.city}
                      onChange={(e) => onValueChange(e)}
                    />
                  </div>
                  <div className="col-lg-4"></div>
                </div>

                <div className="row mt-4 mb-4">
                  <div className="col-lg-4">
                    <label className="form-label">State</label>
                  </div>
                  <div className="col-lg-4">
                    <input
                      type="text"
                      className="form-control"
                      name="state"
                      value={address.state}
                      onChange={(e) => onValueChange(e)}
                    />
                  </div>
                  <div className="col-lg-4"></div>
                </div>

                <div className="row mt-4 mb-4">
                  <div className="col-lg-4">
                    <label className="form-label">Country</label>
                  </div>
                  <div className="col-lg-4">
                    <input
                      type="text"
                      className="form-control"
                      name="country"
                      value={address.country}
                      onChange={(e) => onValueChange(e)}
                    />
                  </div>
                  <div className="col-lg-4"></div>
                </div>

                <div className="row mt-3">
                  <div className="col-lg-5"></div>
                  <div className="col-lg-2">
                    <input
                      type="submit"
                      value="submit"
                      className="btn btn-primary"
                    />
                  </div>
                  <div className="col-lg-5"></div>
                </div>
              </center>
            </form>
          </div>
        </div>
        </div>
      
    </>
  );
}

export default EditAddress;
