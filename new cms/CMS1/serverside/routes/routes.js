import express from "express";

import {
  addUser,
  getUser,
  getAll,
  getOrder,
  addProduct,
  getOrderData,
  totalOrder,
  totalUser,
  totalSales,
  getAdmin,
  productlist,
  deleteproduct,
  getAddress,
  getAddressDetail,
  EditAddress,
  DeleteAddress,
  addAddress,
  addCategories,
  getCategories,
  setUser_register,
  getUser_login,
  addWallet,
  getWalletAmount,
  getTransaction,
  Incoming_order


} from "../controllers/cms_controller.js";

import Authenticate from "../middleware/authenticate.js";



const router = express.Router();
router.post("/register", addUser);
router.post("/login", getUser);


router.get('/order_data', getOrder);
router.get('/order_data/:id', getOrderData);
router.post('/addproduct' , addProduct );
router.get('/setting', getAdmin);
router.post('/addAddress',addAddress);
router.get('/Address',getAddress);
router.get('/AddressDetail/:id',getAddressDetail);
router.put('/EditAddress/:id',EditAddress);
router.delete('/address/:id',DeleteAddress);
router.get('/home/order',Authenticate, totalOrder);
router.get('/home/user',Authenticate, totalUser);
router.get('/home/sales',Authenticate, totalSales);
router.post('/addWallet/:id',addWallet);
router.get('/getWalletAmount/:id',getWalletAmount);
router.get('/getTransaction/:id',getTransaction);

 



router.post("/Categories", Authenticate, addCategories);
router.get("/Categories", Authenticate, getCategories);
router.post("/addproduct", Authenticate, addProduct);
router.get("/productlist", Authenticate, productlist);
router.delete("/productlist/:id", Authenticate, deleteproduct);


router.get("/login_data", Authenticate, getAll);
router.get("/setting", Authenticate, getAdmin);
router.post("/addAddress", Authenticate, addAddress);
router.get("/address", Authenticate, getAddress);
router.get("/AddressDetail/:id", Authenticate, getAddressDetail);
router.put("/EditAddress/:id", Authenticate, EditAddress);
router.delete("/address/:id", Authenticate, DeleteAddress);
//website side link
router.post("/user/register", setUser_register);
router.post("/user/login", getUser_login);
router.post("/inorder", Incoming_order);


export default router;
