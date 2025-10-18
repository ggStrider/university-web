// task 1
const now = new Date();
const date = document.getElementById("date");

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = [
  "January", "February", "March", "April", "May", "June", 
  "July", "August", "September", "October", "November", "December"
];

const dayName = days[now.getDay()];
const monthName = months[now.getMonth()];
const dayNumber = now.getDate();
const year = now.getFullYear();
const hours = String(now.getHours()).padStart(2, "0");
const minutes = String(now.getMinutes()).padStart(2, "0");

date.textContent = `${dayName}, ${monthName} ${dayNumber}, ${year} ${hours}:${minutes}`;


// task 2
const news = document.getElementById("newsId");
news.remove();

// task 3
const dataSite = {
    proSoft: [
        "Firewall",
        "Antivirus",
        "VPN"
    ],
    whyUs: [
        "High quality",
        "Reliable",
        "Fast"
    ]
};

const itemsSoft = document.getElementById("itemsSoft");
itemsSoft.innerHTML = "";

const sortedProSoft = dataSite.proSoft.slice().sort();

sortedProSoft.forEach(soft => {
    const li = document.createElement("li");
    li.className = "prof-soft-item";
    li.textContent = soft;
    itemsSoft.appendChild(li);
});

const whyUs = document.getElementById("whyUsId");
whyUs.innerHTML = "";

const sortedWhyUs = dataSite.whyUs.slice().sort();
sortedWhyUs.forEach(_whyUs => {
    const li = document.createElement("li");
    li.className = "list1";

    const a = document.createElement("a");
    a.href = "#";
    a.textContent = _whyUs;
    li.appendChild(a);

    whyUs.appendChild(li);
});
