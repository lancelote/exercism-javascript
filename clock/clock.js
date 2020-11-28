const formatNumber = (number) => number.toString().padStart(2, "0");

export class Clock {
  constructor(hour, minutes = 0) {
    this.minutes = minutes % 60;
    this.hour = (hour + Math.floor(minutes / 60)) % 24;

    if (this.hour < 0) {
      this.hour += 24;
    }

    if (this.minutes < 0) {
      this.minutes += 60;
    }
  }

  toString() {
    return `${formatNumber(this.hour)}:${formatNumber(this.minutes)}`;
  }

  plus(minutes) {
    return new Clock(this.hour, this.minutes + minutes);
  }

  minus(minutes) {
    return new Clock(this.hour, this.minutes - minutes);
  }

  equals(other) {
    return this.hour === other.hour && this.minutes === other.minutes;
  }
}
