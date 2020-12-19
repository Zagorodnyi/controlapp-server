const events = require("../utils/CONST_events");

module.exports = class Timer {
  seconds = 0;
  minutes = 0;
  hours = 0;
  // Start timer handle method
  startCountdown = (socket, { minutes, seconds }) => {
    this.seconds = seconds;
    this.minutes = minutes;
    socket.emit(events.TIMER_DATA, {
      minutes:
        this.minutes.toString().length === 1
          ? `0${this.minutes}`
          : this.minutes,
      seconds:
        this.seconds.toString().length === 1
          ? `0${this.seconds}`
          : this.seconds,
    });
    return setInterval(() => {
      if (this.seconds === 0) {
        this.minutes--;
        this.seconds = 59;
        socket.emit(events.TIMER_DATA, {
          minutes:
            this.minutes.toString().length === 1
              ? `0${this.minutes}`
              : this.minutes,
          seconds:
            this.seconds.toString().length === 1
              ? `0${this.seconds}`
              : this.seconds,
        });
      } else {
        this.seconds--;
        socket.emit(events.TIMER_DATA, {
          minutes:
            this.minutes.toString().length === 1
              ? `0${this.minutes}`
              : this.minutes,
          seconds:
            this.seconds.toString().length === 1
              ? `0${this.seconds}`
              : this.seconds,
        });
      }
    }, 1000);
  };

  // Start capturing duration aka stopwatch
  captureDuration = (socket) => {
    socket.broadcast.emit(events.CAPTURE_DATA, {
      hours: this.hours.toString().length < 2 ? `0${this.hours}` : this.hours,
      minutes:
        this.minutes.toString().length < 2 ? `0${this.minutes}` : this.minutes,
    });
    return setInterval(() => {
      if (this.minutes === 59) {
        this.hours++;
        this.minutes = 0;
        socket.broadcast.emit(events.CAPTURE_DATA, {
          hours:
            this.hours.toString().length < 2 ? `0${this.hours}` : this.hours,
          minutes:
            this.minutes.toString().length < 2
              ? `0${this.minutes}`
              : this.minutes,
        });
      } else {
        this.minutes++;
        socket.broadcast.emit(events.CAPTURE_DATA, {
          hours:
            this.hours.toString().length < 2 ? `0${this.hours}` : this.hours,
          minutes:
            this.minutes.toString().length < 2
              ? `0${this.minutes}`
              : this.minutes,
        });
      }
    }, 60000);
  };

  static stop = (id) => {
    clearInterval(id);
  };
};
