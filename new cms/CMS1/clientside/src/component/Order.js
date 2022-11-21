import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { getOrder } from "../service/api";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

function Order() {
 
  const [orderData, setOrderData] = useState();
  
  // eslint-disable-next-line
  const [cookies, setCookie] = useCookies(["user"]);
  
  let token_value = cookies.jwtoken;
  const imgpath =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmLPSwWEGlf4bXeS8c32qyuDS6W6X9QfbKXw&usqp=CAU";




    const getAllOrder = async () => {
      const order_data = await getOrder(token_value);
      setOrderData(order_data.data);
    };


    useEffect(() => {
      getAllOrder();
    }, []);


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
            <div className="col-lg-9">
              {" "}
              <h3 className="text-center"> User Order Details </h3>
              <div>
                {!orderData ? (
                  <div className="row mt-5">
                    <div className="card text-center">
                      <div className="card-header">data not found</div>
                    </div>
                  </div>
                  ) : (
                  <div>
                    {orderData.map((value, id) => (
                      <div className="card" style={{ width: "20rem" }} key={id}>
                        <img
                          className="card-img-top"
                          src={imgpath}
                          alt="default img"
                        />
                        <div className="card-body">
                          <h5 className="card-title">
                            Product Name: {value.productname}{" "}
                          </h5>
                          <div className="card-text">
                            <h5> Product Price: {value.price}</h5>
                            <h5> Customer Name: {value.username}</h5>
                          </div>
                          <button className="btn btn-warning ">
                            <Link
                              to={`/ShowOrder/${value._id}`}
                              style={{ textDecoration: "none" }}
                            >
                              {" "}
                              See Full{" "}
                            </Link>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }


  export default Order;
