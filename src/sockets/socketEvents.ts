import * as socketio from 'socket.io'
import EventChannel from '../classes/EventEmmiter'
import { MongooseDocument } from 'mongoose'
const Timer = require("../classes/Timer");
const events = require("../utils/CONST_events");
const Settings = require("../models/Settings");



const socketStart = (io: socketio.Server) => {
  // Timer socket setup
  const confidence: socketio.Namespace = io.of("/timer");
  setTimeout(() => {
    EventChannel.emit('socket', confidence)
  }, 0)

  let timerID: string;
  let captureId: string;

  confidence.on("connection", (socket) => {
    (async () => {
      try {
        await Settings.updateOne(
          {
            deviceId: socket.request._query.deviceId,
          },
          { connected: socket.connected }
        )
        confidence.emit('STATUS_CHANGED')
      }
      catch (err) {
        console.log(err)
      }
    })()
    console.log("Timer connected", socket.id, socket.connected);
    socket.emit(events.SUCCESS);

    socket.on(events.TIMER_START, (params) => {
      const minutes = params.minutes ? parseInt(params.minutes) : 0;
      const seconds = params.seconds ? parseInt(params.seconds) : 0;
      if (minutes === 0 && seconds === 0) return;
      Timer.stop(timerID);
      timerID = new Timer().startCountdown(socket, {
        minutes: minutes,
        seconds: seconds,
      });
    });

    socket.on(events.CAPTURE, () => {
      Timer.stop(captureId);
      captureId = new Timer().captureDuration(socket);
    });

    socket.on(events.TIMER_STOP, () => {
      socket.broadcast.emit(events.TIMER_STOP);
      Timer.stop(timerID);
    });

    socket.on(events.CAPTURE_STOP, () => {
      Timer.stop(captureId);
    });

    socket.on(events.LAYOUT, () => {
      confidence.emit(events.LAYOUT);
    });

    socket.on('disconnect', () => {
      (async () => {
        try {
          await Settings.updateOne(
            {
              deviceId: socket.request._query.deviceId,
            },
            { connected: socket.connected }
          )
          confidence.emit('STATUS_CHANGED')
        }
        catch (err) {
          console.log(err)
        }
      })()
    })
  });

  // Socket communication setup
  const controlApp: socketio.Namespace = io.of("/controlApp");

  // Listeners configuration
  controlApp.on("connection", (socket) => {
    socket.emit(events.SUCCESS);
    console.log(`Connected ${socket.id}`);

    socket.on(events.NOTE_ON, (msg) => {
      socket.broadcast.emit(events.NOTE_ON, msg);
    });
  });
};

export { socketStart }
