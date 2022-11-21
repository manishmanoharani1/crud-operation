import jwt from "jsonwebtoken";
import Cmsuser from "../schema/dbschema.js";

const Authenticate = async (req, res, next) => {
  try {

    const token = req.cookies.jwtoken || req.headers.cookies || req.headers.jwtoken ;

    //console.log(req.headers.cookies);
    const verifyToken = jwt.verify(token, `MYNAMEISSHUBHAMDHOOTFROMJODHPUR`);
    const rootUser = await Cmsuser.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });
    if (!rootUser) {
      throw new Error("Unauthorised user");
    }
    req.token = token;
    req.rootUser = rootUser.name;
    req.userID = rootUser._id;
    next();
  } catch (error) {
    res.status(401).send("unauthorised: no token provided  ");
    console.log(error);
  }
};
export default Authenticate;
