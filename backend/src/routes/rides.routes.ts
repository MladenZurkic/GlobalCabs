import express from "express";
import { RidesController } from "../controllers/rides.controller";

const ridesRouter = express.Router();

ridesRouter.post("/createRide", new RidesController().createRide);
ridesRouter.get("/getRide", new RidesController().getRides);
ridesRouter.get("/getRide/:id", new RidesController().getRide);

export default ridesRouter;
