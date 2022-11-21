import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { addcategories, getCategories } from "../service/api";
import { useCookies } from "react-cookie";

function Categories() {
  const initial = {
    cat_name: "",
  };
  const [categories, setcategories] = useState(initial);
  const [categoriesData, setcategoriesData] = useState();
  // eslint-disable-next-line
  const [cookies, setCookie] = useCookies(["user"]);
  let token_value = cookies.jwtoken;

  useEffect(() => {
    getdata();
  }, []);
  const getdata = async () => {
    const categories_detail_data = await getCategories(token_value);
    setcategoriesData(categories_detail_data.data);

  };

  const onValueChange = (e) => {
    setcategories({ ...categories, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //  console.log("categories add", categories);
    await addcategories(categories, token_value);
    // console.log(response);
    getdata();
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
              <h3 className="text-center pt-4">Add Categories</h3>
              <form onSubmit={handleSubmit}>
                <div className="row mt-5">
                  <div className="col-lg-3"></div>
                  <div className="col-lg-4">
                    <input
                      type="text"
                      name="cat_name"
                      onChange={(e) => onValueChange(e)}
                      className="form-control"
                      placeholder="Add categories"
                    />
                  </div>
                  <div className="col-lg-4">
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

            <div>
              <h3 className="text-center pt-4">Categories List</h3>
              {!categoriesData ? (
                <div className="card text-center">
                  <div className="card-header">data not found</div>
                </div>
              ) : (
                <table className="table">
                  <thead>
                    <tr>
                      <th>S.no</th>
                      <th>Categories</th>
                    </tr>
                  </thead>

                  <tbody>
                    {categoriesData.map((value, id) => (
                      <tr key={id}>
                        <td>{id + 1}</td>
                        <td> {value.cat_name} </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
