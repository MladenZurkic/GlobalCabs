"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const rides_controller_1 = require("../controllers/rides.controller");
const ridesRouter = express_1.default.Router();
ridesRouter.post("/createRide", new rides_controller_1.RidesController().createRide);
ridesRouter.get("/getRide", new rides_controller_1.RidesController().getRides);
ridesRouter.get("/getRide/:id", new rides_controller_1.RidesController().getRide);
exports.default = ridesRouter;
