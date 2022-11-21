import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useParams } from "react-router-dom";
import { getorderData } from "../service/api";
import { useCookies } from "react-cookie";

function ShowOrder() {
  const [oneData, setData] = useState();
  // eslint-disable-next-line
  const [cookies, setCookie] = useCookies(["user"]);
  let token_value = cookies.jwtoken;
  const imgpath =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmLPSwWEGlf4bXeS8c32qyuDS6W6X9QfbKXw&usqp=CAU";
  let { id } = useParams();
  // console.log(id);
  useEffect(() => {
    getAllOrder();
  }, []);

  const getAllOrder = async () => {
    const order_data = await getorderData(id, token_value);
    setData(order_data.data);
    console.log(order_data.data);
    //  console.log(oneData.data.username)
  };
  return (
    <>
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

          {!oneData ? (

            <div className="row mt-5">
              <div className="card text-center">
                <div className="card-header">data not found</div>
              </div>
            </div>
          ) : (
            <div>
              <div className="row">
                <div className="col-lg-6">
                  <img
                    className="card-img-top p-3"
                    src={imgpath}
                    alt="default img"
                  />
                </div>
                <div className="col-lg-6 p-3 ">
                  <h3 className="px-5 mx-5 mb-3"> Product Data </h3>
                  <h6>
                    <p>Product Id : NoteBook-101 </p>
                    <p>Product Name : {oneData.productname} </p>
                    <p>Product Title : Fair Paper Notebook </p>
                    <p>Product Quantity: {oneData.quantity} </p>
                    <p>Product Price: {oneData.price} </p>
                    <p>Total Amount: {oneData.quantity * oneData.price} </p>
                    <p>
                      Product Description: * Pack Of 4 - Single Line Notebook,
                      <br /> 72,Pages, 240 mm x 180 mm
                      <br /> Notebooks for every subject for hassle-free
                      note-taking during classes or lectures.
                      <br />
                      Classmate uses elemental chlorine free paper
                      <br /> This notebook consists of quality papers{" "}
                    </p>
                  </h6>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg-12 text-center">
                  <h4> User Details </h4>
                </div>
              </div>

              <div className="row p-3">
                <div className="col-lg-6">
                  <h6>
                    <p> User Name: {oneData.username} </p>
                    <p> Phone Number: {oneData.phonenumber} </p>
                  </h6>
                </div>
                <div className="col-lg-6">
                  <h6>
                    <p> Email: megha111@adglobal360.com </p>
                    <p> Address : jodhpur </p>
                  </h6>
                </div>
              </div>
              <div className="row p-3">
                <div className="col-lg-12"></div>
              </div>
            </div>
          )}
        </div>

      </div>
    </>
  );
}

export default ShowOrder;
