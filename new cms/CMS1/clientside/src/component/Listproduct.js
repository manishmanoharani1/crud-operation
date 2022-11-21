import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { getProductAll, deleteProduct } from '../service/api';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

function Listproduct() {
  
  const [product, setProductData] = useState();
  
  // eslint-disable-next-line
  const [cookies, setCookie] = useCookies(['user']);
 
  const navigate = useNavigate();
  let token_value = cookies.jwtoken;
  useEffect(() => {
    getAllProduct();
  }, []);
  
  const getAllProduct = async () => {
    const product_data = await getProductAll(token_value);
    setProductData(product_data);
  }
  const deleteUserDetails = async (id) => {
    await deleteProduct(id, token_value);

    navigate('/home');
  }

  return (
    <>
      <div >
        <div className="row">
          <div className="col-lg-12"><Navbar /> </div>
        </div>
        <div className="row">
          <div className="col-lg-3"><Sidebar /> </div>
          <div className="col-lg-9">
            <h3 className="text-center">Product Details List</h3>
            <div>

              {!product ? (

                <div className="card text-center">
                  <div className="card-header">
                    data not found
                  </div>
                </div>

              ) : (

                <table className="table">

                  <thead>
                    <tr>
                      <th >s.no</th>
                      <th >Product Name</th>
                      <th >Category</th>
                      <th >Price</th>
                      <th >Stock Value</th>
                      <th >Description</th>
                      <th >Delete</th>
                    </tr>
                  </thead>

                  <tbody>
                    {
                      product.data.map((value, id) =>
                        <tr key={id}>
                          <td > {id + 1}</td>
                          <td > {value.name} </td>
                          <td > {value.category} </td>
                          <td > {value.price} </td>
                          <td > {value.stockvalue} </td>
                          <td > {value.description} </td>
                          <td><button onClick={() => { deleteUserDetails(value.id) }}>Delete</button></td>
                        </tr>
                      )
                    }
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Listproduct