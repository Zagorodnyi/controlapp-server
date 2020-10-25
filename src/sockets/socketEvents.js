const Timer = require("../classes/Timer");
const events = require("../utils/CONST_events");

const exportModule = {};

const socketStart = (io) => {
  // Timer socket setup
  const confidence = io.of("/timer");
  exportModule.confidence = confidence;
  let timerID;
  let captureId;

  confidence.on("connection", (socket) => {
    console.log("Timer connected");
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
  });

  // Socket communication setup
  const controlApp = io.of("/controlApp");

  // Listeners configuration
  controlApp.on("connection", (socket) => {
    socket.emit(events.SUCCESS);
    console.log(`Connected ${socket.id}`);

    socket.on(events.NOTE_ON, (msg) => {
      socket.broadcast.emit(events.NOTE_ON, msg);
    });
  });
};

exportModule.start = socketStart;

module.exports = exportModule;
