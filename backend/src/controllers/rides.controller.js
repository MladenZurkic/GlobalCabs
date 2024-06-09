"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.RidesController = void 0;
const ride_1 = __importDefault(require("../models/ride"));
class RidesController {
  constructor() {
    this.createRide = (req, res) =>
      __awaiter(this, void 0, void 0, function* () {
        try {
          const ride = new ride_1.default(req.body);
          yield ride.save();
          res.status(201).json(ride);
        } catch (err) {
          res.status(400).json({ error: err.message });
        }
      });
    this.getRides = (req, res) =>
      __awaiter(this, void 0, void 0, function* () {
        try {
          const rides = yield ride_1.default.find();
          res.status(200).json(rides);
        } catch (err) {
          res.status(400).json({ error: err.message });
        }
      });
    this.getRide = (req, res) =>
      __awaiter(this, void 0, void 0, function* () {
        try {
          const ride = yield ride_1.default.findById(req.params.id);
          res.status(200).json(ride);
        } catch (err) {
          res.status(400).json({ error: err.message });
        }
      });
  }
}
exports.RidesController = RidesController;
