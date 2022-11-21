import React from "react";

function Navbar() {
  const bgdata = {
    paddingLeft: "70px",
    borderRadius: "50px",
  };
  return (
    <>
      <div className="row">
        <nav className="navbar navbar-expand-lg  navbar-dark bg-primary">
          <div className="col-sm-10">
            <h3 className="navbar-brand " style={bgdata}>
              CMS Site
            </h3>
          </div>
          <div className="col-sm-2"></div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
