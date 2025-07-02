import express from "express";
import { getAllCopyrights, searchROCNo, } from "../controllers/copyrightController.js";
const copyrightRouter = express.Router();
copyrightRouter.get("/", getAllCopyrights);
copyrightRouter.get("/search", searchROCNo);
export default copyrightRouter;
//# sourceMappingURL=copyright.js.map