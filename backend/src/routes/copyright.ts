import express from "express";
import {
  getAllCopyrights,
  getCopyright,
  searchROCNo,
} from "../controllers/copyrightController.js";
const copyrightRouter = express.Router();

copyrightRouter.get("/search", searchROCNo);
copyrightRouter.get("/:id", getCopyright);
copyrightRouter.get("/", getAllCopyrights);

export default copyrightRouter;
