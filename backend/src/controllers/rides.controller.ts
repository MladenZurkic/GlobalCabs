import express from "express";
import RideModel from "../models/ride";

export class RidesController {
  createRide = async (req: express.Request, res: express.Response) => {
    try {
      const ride = new RideModel(req.body);
      await ride.save();
      res.status(201).json(ride);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  };

  getRides = async (req: express.Request, res: express.Response) => {
    try {
      const rides = await RideModel.find();
      res.status(200).json(rides);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  };

  getRide = async (req: express.Request, res: express.Response) => {
    try {
      const ride = await RideModel.findById(req.params.id);
      res.status(200).json(ride);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  };
}
