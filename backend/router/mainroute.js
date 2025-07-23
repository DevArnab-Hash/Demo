import { Router } from "express";
import User from "../database/models/userModel.js";

const route = Router();

route.get("/", (req, res) => {
  res.send("hello..Welcome to my server");
});


// Sign up, register
route.post("/signup", async (req, res) => {
  try {
    const {name, email, password} = req.body;

    const findEmail = await User.findOne({ email: email});

    if(findEmail) {
      res.send({ code: 400, message: "Email Already Exist"})
    }
    else {           
      const Newuser = new User({ name, email, password });
      await Newuser.save();
      res.send({ code: 200, message: "User is Added", userData: Newuser });
    }


  } catch (err) {
    res.send({ code: 400, message: "User is not Added", errMessgae: err.message}); 
  }
});


// Login
route.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const findEmail = await User.findOne({ email: email });

    if (findEmail) {
      const findUser = await User.findOne({ email: email, password: password });

      if (findUser) {
        res.send({ code: 200, message: "Login Successful", userdata: findUser });
      } else {
        res.send({ code: 404, message: "Wrong Password" });
      }
    } else {
      res.send({ code: 404, message: "Email does not exist" });
    }
  } catch (err) {
    res.send({ code: 400, message: 'Unable to login', errMessgae: err.message});
  }
});


export default route;
