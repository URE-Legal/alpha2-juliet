import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import copyrightRouter from "./routes/copyright.js";
dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api/copyright", copyrightRouter);
app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});
//# sourceMappingURL=index.js.map