import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { getTransaction } from "../service/api";
import { addwallet } from "../service/api";
import { getWalletAmount } from "../service/api";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
function Wallet() {
  const initial = {
    transaction: "",
  };
  const [walletData, setWallet] = useState(initial);
  const [transactionData, setTransaction] = useState();
  const [walletAmountData, setWalletAmount] = useState();
  //const [balance, setbalance] = useState();
  // eslint-disable-next-line
  const [cookies, setCookie] = useCookies(["user"]);
  // eslint-disable-next-line
  let token_value = cookies.jwtoken;

  let { id } = useParams();
 // console.log(id);

  useEffect(() => {
    getdata();
    getwalletdata();
  }, []);
  const getdata = async () => {
    const transaction_data = await getTransaction(id);
    setTransaction(transaction_data.data);
   // console.log(transaction_data.data);
    getwalletdata();

  };

  const getwalletdata = async () => {
    const wallet_data = await getWalletAmount(id);
    setWalletAmount(wallet_data.data.wallet);
    //console.log(wallet_data.data.wallet);
  };

  const onValueChange = (e) => {
    setWallet({ ...walletData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   // console.log("transaction add", walletData, id);
   // eslint-disable-next-line
    const response = await addwallet(walletData, id);
    window.location.reload();
    getdata();
    getwalletdata();
    //console.log(response);
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
          <div className="col-lg-9">
            <div>
              <form onSubmit={handleSubmit}>
                <div className="row mt-4 mb-3">
                  <div className="col-lg-8"></div>
                  <div className="col-lg-2">
                    <input
                      type="text"
                      name="transaction"
                      onChange={(e) => onValueChange(e)}
                      className="form-control"
                      placeholder="Add balance"
                    />
                  
                  </div>
                  <div className="col-lg-2">
                    <input
                      type="submit"
                      value="Add  Here "
                      className="btn btn-primary"
                    />
                  </div>
                  <div className="col-lg-3"></div>
                </div>
              </form>
            </div>

            <div className="card m-2 ">
              <div>
                <div className="row">
                  <div className="card-body">
                    <div className="card m-2 ">
                      <div>
                        <div className="row">
                          <div className="card-body">
                            <h5 class="card-title px-4 pt-3">Total Balance</h5>
                            {
                                !walletAmountData? (
                                <div><p class="card-text px-4 "> 
                                data not found
                                </p></div>
                                 ) : (
                           
                            <div>
                               
                                    <p className="card-text px-4">{walletAmountData}</p>
                            
                            </div>
                            
                            
                             )
                             }
                          </div>
                        </div>
                      </div>
                    </div>
                    <h5 class="card-title px-4 py-3">Transactions</h5>
                    {!transactionData ? (
                      <div className="card text-center">
                        <div className="card-header">data not found</div>
                      </div>
                    ) : (
                      <table class="table  table-borderless">
                        <tbody>
                          {transactionData.map((value, id) => (
                            <tr key={id}>
                             
                              <td>{id + 1}</td>
                              <td> +{value.transaction} </td>
                            </tr>

                          ))}
                        </tbody>
                      </table>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Wallet;
