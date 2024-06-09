"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Ride = new Schema({
    startingAddress: {
        type: String,
    },
    destinationAddress: {
        type: String,
    },
    date: {
        type: Date,
    },
    phoneNumber: {
        type: String,
    },
    paymentMethod: {
        type: String,
    },
    cardNumber: {
        type: String,
    },
    expirationDate: {
        type: Date,
    },
    estimatedPrice: {
        type: Number,
    },
});
exports.default = mongoose_1.default.model("RideModel", Ride, "rides");
