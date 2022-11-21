import React from "react";
import { NavLink } from "react-router-dom";
function Sidebar() {
  const bgbody = {
    minHeight: "100vh",
    minWidth: "100%",
    backgroundColor: "#EAE3D2",

    paddingLeft: "100px",
  };

  return (
    <>
      <div className="row">
        <nav
          id="sidebarMenu"
          className="col-md-3 col-lg-2 d-md-block "
          style={bgbody}>
          <div className="position-sticky pt-3  sidebar-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <NavLink className="fs-5 text-decoration-none" to="/home">
                  <i className="fa-solid fa-house-chimney px-3"></i> Dashboard
                </NavLink>
              </li>
              <li className="nav-item mt-3">
                <p className="fs-5 text-decoration-none text-primary">
                  <i className="fa-solid fa-box px-3"></i> Product
                </p>
              </li>
              <ul style={{ listStyleType: "none" }}>
                <li className="nav-item ">
                  <NavLink
                    className="fs-5 text-decoration-none"
                    to="/Categories">
                    <i className="fa-solid fa-circle-plus px-3"></i>Categories
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink
                    className="fs-5 text-decoration-none"
                    to="/addproduct">
                    <i className="fa-solid fa-circle-plus px-3"></i>Add Product
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink
                    className="fs-5 text-decoration-none"
                    to="/productlist">
                    <i className="fa-solid fa-circle-plus px-3"></i>List Product
                  </NavLink>
                </li>
              </ul>
              <li className="nav-item mt-3">
                <NavLink className="fs-5 text-decoration-none" to="/order">
                  <i className="fa-solid fa-dolly px-3"></i>Orders
                </NavLink>
              </li>
              <li className="nav-item mt-3">
                <NavLink className="fs-5 text-decoration-none " to="/loginuser">
                  <i className="fa-solid fa-user px-3"></i> User
                </NavLink>
              </li>
              <li className="nav-item mt-3">
                <NavLink className="fs-5 text-decoration-none " to="/address">
                  <i className="fa-solid fa-location-pin"></i> Addresses
                </NavLink>
              </li>
              <li className="nav-item mt-3">
                <NavLink className="fs-5 text-decoration-none" to="/setting">
                  <i className="fa-solid fa-gears px-3"></i>Setting
                </NavLink>
              </li>
              <li className="nav-item mt-3">
                <NavLink className="fs-5 text-decoration-none" to="/logout">
                  <i className="fa-solid fa-arrow-right-from-bracket px-3"></i> Logout
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>

      </div>
    </>
  );
}

export default Sidebar;
