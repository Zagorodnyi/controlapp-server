
import express, { Request, Response, NextFunction } from 'express'
import { MongooseDocument } from 'mongoose'
import { Namespace } from 'socket.io'
import EventChannel from '../classes/EventEmmiter'
const Settings = require("../models/Settings");
const events = require("../utils/CONST_events");
const router = express.Router();


let confidence: Namespace
EventChannel.on('socket', (data: Namespace) => {
  confidence = data
})

router.get("/confidence/settings", async (req: Request, res: Response) => {
  try {
    const response: MongooseDocument = await Settings.findOne({
      _id: "5f94baa6b182f52ffdf5c7b9",
    });
    res.status(200).json({ ...response });

  } catch (err) {
    res.status(500).json({ error: err.code });
    console.log(err);
  }
});

router.post("/confidence/settings", async (req: Request, res: Response) => {
  const newSettings = {
    scale: req.body.scale,
    currentDevice: req.body.currentDevice,
  };

  try {
    await Settings.updateOne(
      {
        _id: "5f94baa6b182f52ffdf5c7b9",
      },
      newSettings
    );
    confidence.emit(events.SETTINGS_CHANGED, newSettings);

    res.status(201).json({ message: "Success" });
  } catch (err) {
    res.status(500).json({ error: err.code });
    console.log(err);
  }
});

export default router;
