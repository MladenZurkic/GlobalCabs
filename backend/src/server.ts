import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import ridesRouter from "./routes/rides.routes";

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/globalcabs");
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("db connected");
});

const router = express.Router();
router.use("/rides", ridesRouter);

app.use("/", router);

const port = process.env.PORT || 4000;
app.listen(4000, () => console.log(`Express server running on port ${port}`));
