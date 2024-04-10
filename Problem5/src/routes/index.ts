import express, { Router } from "express";
import ResourceRoute from "@routes/resource";
const route: Router = express.Router();

route.use("/resource", ResourceRoute);
export default route;