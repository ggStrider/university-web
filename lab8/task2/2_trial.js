function setCookie(name, value, seconds, path = "/") {
    const date = new Date();
    date.setTime(date.getTime() + seconds * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=${path}`;
}

function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let c of cookies) {
        const [key, val] = c.split("=");
        if (key === name) return val;
    }
    return null;
}

function clearCookie(name, path = "/") {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path}`;
}

const TRIAL_COOKIE_NAME = "trial_active_state_55X";
const SCROLL_COOKIE_NAME = "scrollPos";
const USER_ID = "XYZ-2024";
const TRIAL_DURATION = 3;
const PATH = "/";

let trial = getCookie(TRIAL_COOKIE_NAME);

if (!trial) {
    const startDate = Date.now();
    const value = `${startDate}__${USER_ID}`;
    setCookie(TRIAL_COOKIE_NAME, value, TRIAL_DURATION, PATH);
    document.getElementById("status").textContent =
        "Trial activated. Reload the page.";
} else {
    const [savedTime] = trial.split("__");
    const start = Number(savedTime);
    const now = Date.now();
    const passedSec = Math.floor((now - start) / 1000);
    const left = TRIAL_DURATION - passedSec;

    if (left > 0) {
        document.getElementById("status").textContent =
            `Trial is active. Remaining: ${left} seconds`;
    } else {
        document.getElementById("status").textContent =
            "Trial expired.";
        clearCookie(TRIAL_COOKIE_NAME, PATH);
    }
}

window.addEventListener("scroll", () => {
    document.cookie = `${SCROLL_COOKIE_NAME}=${window.scrollY}; path=${PATH}`;
});

window.addEventListener("load", () => {
    const scrollPos = getCookie(SCROLL_COOKIE_NAME);
    if (scrollPos) window.scrollTo(0, Number(scrollPos));
});
