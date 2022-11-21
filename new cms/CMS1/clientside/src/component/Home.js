import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useCookies } from "react-cookie";

import { totalOrder, totalUser, totalSales } from "../service/api";
function Home() {
  // eslint-disable-next-line
  const [cookies, setCookie] = useCookies(["user"]);

  const [order, setOrder] = useState("0");
  const [countUser, setCountuser] = useState("0");
  const [countSales, setCountsales] = useState("0");

  let token_value = cookies.jwtoken;
  //console.log(cookies.jwtoken);
  useEffect(() => {
    total_order_data();
    total_user_data();
    total_sales_data();
  }, []);

  const total_order_data = async () => {
    const total_order = await totalOrder(token_value);
    //console.log(total_order);
    setOrder(total_order.data);
  };

  const total_user_data = async () => {
    const total_user = await totalUser(token_value);
    //console.log(total_order);
    setCountuser(total_user.data);
  };

  const total_sales_data = async () => {
    const total_sales = await totalSales(token_value);
    //console.log(total_sales.data[0].sum_val);
    setCountsales(total_sales.data[0].sum_val);
  };

  return (
    <>
      <div style={{ background: "#f2edf3" }}>
        <div className="row">
          <div className="col-lg-12">
            <Navbar />{" "}
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <Sidebar />{" "}
          </div>
          <div className="col-lg-9">
            <div className="row">
              <div className="col-lg-4 p-2 mt-3">
                <div
                  className="card text-white"
                  style={{ background: "#f96868" }}
                >
                  <div className="card-body p-4">
                    <h4 className="card-title">
                      Total User <i className="fa-solid fa-chart-line px-5"></i>
                    </h4>
                    <p className="h3 p-2">{countUser}</p>
                    <p className="card-text">Total User Of system</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 p-2 mt-3">
                <div
                  className="card text-white "
                  style={{ background: "#5e50f9" }}
                >
                  <div className="card-body p-4">
                    <h4 className="card-title">
                      Total Sales{" "}
                      <i className="fa-regular fa-bookmark px-5"></i>{" "}
                    </h4>
                    <p className="h3 p-2"> $ {countSales}</p>
                    <p className="card-text">Total Sales Of Business</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 p-2 mt-3">
                <div
                  className="card text-white "
                  style={{ background: "#1bcfb4" }}
                >
                  <div className="card-body p-4">
                    <h4 className="card-title">
                      Total Order <i className="fa-regular fa-diamond px-5"></i>{" "}
                    </h4>
                    <p className="h3 p-2"> {order}</p>
                    <p className="card-text">Total Order Of business</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-3 py-5">
              <div className="row p-3">
                <table className="table " style={{ background: "white" }}>
                  <thead>
                    <tr style={{ background: "#f96868" }}>
                      <th>S.No</th>
                      <th>User</th>
                      <th>Problem</th>
                      <th> Status</th>

                      <th>Ticket Id</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Jacob</td>
                      <td>the Bird</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
