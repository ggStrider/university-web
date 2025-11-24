const COOKIE_NAME = "visitCount";
const COOKIE_LIFETIME_IN_SECONDS = 45;

function setCookie(name, value, seconds) {
    const date = new Date();
    date.setTime(date.getTime() + seconds * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
}

function getCookie(name) {
    const decoded = decodeURIComponent(document.cookie);
    const cookies = decoded.split("; ");

    for (let c of cookies) {
        const [key, val] = c.split("=");
        if (key === name) return val;
    }

    return null;
}

function clearCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
}

let visitCountCookie = getCookie(COOKIE_NAME);

if (!visitCountCookie) {
    visitCountCookie = 1;
} else {
    visitCountCookie = parseInt(visitCountCookie) + 1; //add 1 to visit count
}

setCookie(COOKIE_NAME, visitCountCookie, COOKIE_LIFETIME_IN_SECONDS);

console.log("visit count last 45 secs:", visitCountCookie);

document.body.innerHTML = `<h2>visit count on last ${COOKIE_LIFETIME_IN_SECONDS}secs: ${visitCountCookie}</h2>`;