const MS_IN_SECOND = 1000;
const MS_IN_MINUTE = MS_IN_SECOND * 60;
const MS_IN_HOUR   = MS_IN_MINUTE * 60;
const MS_IN_DAY    = MS_IN_HOUR * 24;

class Countdown {

    constructor(value) {
        if (typeof value === "number") {
            this.endTime = Date.now() + value * 1000;
        }
        else if (value instanceof Date) {
            this.endTime = value.getTime();
        }
        else {
            throw new Error("Countdown constructor expects number (int seconds) or Date object");
        }

        this.timerElement = document.getElementById("timer");
        this.subscriptionButton = document.getElementById("subscribeButton");
        this.message = document.getElementById("message");
        this.timerId = null;
    }

    start() {
        this.timerId = setInterval(() => this.update(), 1000);
        this.subscriptionButton.addEventListener("click", () => this.onUserSubscribed());
    }

    update() {
        const left = this.endTime - Date.now();

        if (left <= 0) {
            clearInterval(this.timerId);
            this.timerElement.textContent = "nope, time's up!";
            this.subscriptionButton.disabled = true;
            return;
        }

        const days = Math.floor(left / MS_IN_DAY);
        const hours = Math.floor((left % MS_IN_DAY) / MS_IN_HOUR);
        const minutes = Math.floor((left % MS_IN_HOUR) / MS_IN_MINUTE);
        const seconds = Math.floor((left % MS_IN_MINUTE) / MS_IN_SECOND);

        this.timerElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    onUserSubscribed() {
        const left = this.endTime - Date.now();

        if (left > 0) {
            const secondsLeft = Math.floor(left / 1000);
            this.message.textContent = `Thanks for subscription! Time until subscription become unavailable ${secondsLeft}s.`;
            this.subscriptionButton.disabled = true;
            clearInterval(this.timerId);
        }
    }
}

// const timerDate = new Date(2025, 11, 1, 12, 0, 0, 0);
// let countdownDate = new Countdown(timerDate);
// countdownDate.start();

let countdownSeconds = new Countdown(10);
countdownSeconds.start();