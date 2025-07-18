import { Router } from "express";

const route = Router();

route.get("/", (req, res) => {
  res.send("hello..Welcome to my server");
});


export default route;