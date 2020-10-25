const express = require("express");
const router = express.Router();
const Settings = require("../models/Settings");
const events = require("../utils/CONST_events");
const { confidence } = require("../sockets/socketEvents");

router.get("/confidence/settings", async (req, res) => {
  try {
    const response = await Settings.findOne({
      _id: "5f94baa6b182f52ffdf5c7b9",
    });
    res.status(200).json({ ...response });
  } catch (err) {
    res.status(500).json({ error: err.code });
    console.log(err);
  }
});

router.post("/confidence/settings", async (req, res) => {
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

module.exports = router;
