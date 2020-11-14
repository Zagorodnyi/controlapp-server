import express, { Request, Response } from 'express'
import { MongooseDocument } from 'mongoose'
import { Namespace } from 'socket.io'
import EventChannel from '../classes/EventEmmiter'
const Settings = require("../models/Settings");
const Manifest = require("../models/Manifest");
const events = require("../utils/CONST_events");
const router = express.Router();



let confidence: Namespace
EventChannel.on('socket', (data: Namespace) => {
  confidence = data
})

router.get("/confidence/settings/:deviceId", async (req: Request, res: Response) => {
  try {
    const response: MongooseDocument = await Settings.findOne({
      deviceId: req.params.deviceId,
    });
    if (response) {
      res.status(200).json({ ...response });
    } else {
      res.status(204).json({ message: 'no settings' });
    }

  } catch (err) {
    res.status(500).json({ error: err.code });
    console.log(err);
  }
});


router.get("/confidence/settings/", async (req: Request, res: Response) => {
  try {
    const response: MongooseDocument = await Settings.find();
    if (response) {
      res.status(200).json(response);
    } else {
      res.status(204).json({ message: 'no settings' });
    }

  } catch (err) {
    res.status(500).json({ error: err.code });
    console.log(err);
  }
});

router.get("/release/manifest/", async (req: Request, res: Response) => {
  console.log('manifest')
  try {
    const response: MongooseDocument = await Manifest.findOne();
    if (response) {
      res.status(200).json(response);
    } else {
      res.status(204).json({ message: 'no settings' });
    }

  } catch (err) {
    res.status(500).json({ error: err.code });
    console.log(err);
  }
});





router.post("/confidence/settings/:deviceId", async (req: Request, res: Response) => {
  const newSettings = {
    deviceId: req.params.deviceId,
    connected: true,
    ...req.body
  };
  try {
    const doc = await Settings.findOne({
      deviceId: req.params.deviceId,
    });
    if (doc) {
      await Settings.updateOne(
        {
          deviceId: req.params.deviceId,
        },
        newSettings
      );
    } else {
      const newDoc = new Settings(newSettings)
      newDoc.save()
    }
    confidence.emit(events.SETTINGS_CHANGED, req.params.deviceId);

    res.status(201).json({ message: "Success" });
  } catch (err) {
    res.status(500).json({ error: err.code });
    console.log(err);
  }
});

export default router;
