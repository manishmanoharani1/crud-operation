import axios from "axios";
//register component
export const addUser = async (data) => {
  try {
    const result = await axios.post("http://localhost:8000/register", data);
    //console.log(result);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
//login component
export const getUser = async (data) => {
  try {
    const result = await axios.post("http://localhost:8000/login", data);
    // console.log(result)
    return result;
  } catch (error) {
    console.log(error.message);
  }
};

//get all user data
export const getAll = async (data) => {
  try {
    const result = await axios.get("http://localhost:8000/login_data", {
      withCredentials: true,
    });
    // console.log(result)
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
//get all order data
export const getOrder = async () => {
  try {
    const result = await axios.get("http://localhost:8000/order_data", {
      withCredentials: true,
    });
    //console.log(result)
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
//get all order data  into one order
export const getorderData = async (id) => {
  try {
    const result = await axios.get(`http://localhost:8000/order_data/${id}`, {
      withCredentials: true,
    });
    //console.log(result)
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
//Add product component
export const productAdd = async (data) => {
  try {
    const result = await axios.post("http://localhost:8000/addproduct", data, {
      withCredentials: true,
    });
    //console.log(result);
    return result;
    
  } catch (error) {
    console.log(error.message);
  }
};
export const totalOrder = async () => {
  try {
    const result = await axios.get(`http://localhost:8000/home/order`, {
      withCredentials: true,
    });
    //  console.log(result)
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
//get total number of user
export const totalUser = async () => {
  try {
    const result1 = await axios.get(`http://localhost:8000/home/user`, {
      withCredentials: true,
    });
    //  console.log(result)
    return result1;
  } catch (error) {
    console.log(error.message);
  }
};
//get total sales of system
export const totalSales = async () => {
  try {
    const result2 = await axios.get(`http://localhost:8000/home/sales`, {
      withCredentials: true,
    });
    //  console.log(result)
    return result2;
  } catch (error) {
    console.log(error.message);
  }
};
//Admin Login Data
export const getAdmin = async (data) => {
  try {
    const result = await axios.get("http://localhost:8000/setting", {
      withCredentials: true,
    });
    // console.log(result)
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
//get all product  data
export const getProductAll = async () => {
  try {
    const result = await axios.get(`http://localhost:8000/productlist`, {
      withCredentials: true,
    });
    //  console.log(result)
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
export const deleteProduct = async (id) => {
  try {
    return await axios.delete(`http://localhost:8000/productlist/${id}`, {
      withCredentials: true,
    });
  } catch (error) {
    console.log(error.message);
  }
};
// All Addresses
export const getAddress = async (data) => {
  try {
    const result = await axios.get("http://localhost:8000/address", {
      withCredentials: true,
    });
    // console.log(result)
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
//delete address
export const deleteAddress = async (id) => {
  try {
    return await axios.delete(`http://localhost:8000/address/${id}`, {
      withCredentials: true,
    });
  } catch (error) {
    console.log(error.message);
  }
};

// Address detail
export const getAddressDetail = async (id) => {
  try {
    const result = await axios.get(
      `http://localhost:8000/AddressDetail/${id}`,
      { withCredentials: true }
    );
    // console.log(result)
    return result;
  } catch (error) {
    console.log(error.message); 
  }
};



//edit address
export const editAddress = async (address, id) => {
  try {
    return await axios.put(`http://localhost:8000/EditAddress/${id}`, address, {
      withCredentials: true,
    });
  } catch (error) {
    console.log(error.message);
  }
};
//setcategories
export const addcategories = async (data) => {
  try {
    const result = await axios.post("http://localhost:8000/Categories", data, {
      withCredentials: true,
    });
    // console.log(result);
    //
    return result;
  } catch (error) {
    // console.log(error);
    alert("message:" + error.response.data.error);
  }
};
// All Addresses
export const getCategories = async () => {
  try {
    const result = await axios.get("http://localhost:8000/Categories", {
      withCredentials: true,
    });
    // console.log(result)
    return result;
  } catch (error) {
    console.log(error.message);
  }
};



//setwallet
export const addwallet = async (data,id) => {
  try {
    const result = await axios.post(`http://localhost:8000/addWallet/${id}`,data);
    // console.log(result);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};

//get wallet amount
export const getWalletAmount = async (id) => {
  
  try {
  //  console.log("hii");
    const result = await axios.get(`http://localhost:8000/getWalletAmount/${id}`);
    // console.log(result)
    return result;
  } catch (error) {
    console.log(error.message);
  }
};



    // Wallet
export const getTransaction = async (id) => {
  
  try {
    const result = await axios.get(`http://localhost:8000/getTransaction/${id}`);
    // console.log(result)
    return result;
  } catch (error) {
    console.log(error.message);
  }
};


