import mongoose from "mongoose";

const Schema = mongoose.Schema;

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

export default mongoose.model("RideModel", Ride, "rides");
