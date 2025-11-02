let fetchButton = document.getElementById("fetchButton");
let axiosButton = document.getElementById("axiosButton");
let apiOut = document.getElementById("apiOut");
let loadingStatus = document.getElementById("loadingStatus");

const API_URL = "https://api.kanye.rest/";

fetchButton.addEventListener("click", () => {
    loadingStatus.textContent = "Loading...";

    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            apiOut.textContent = data.quote;
        })
        .catch(err => {
            console.error("error: ", err);
        })
        .finally(() => {
            loadingStatus.textContent = "";
        });
})

axiosButton.addEventListener("click", () => {
    loadingStatus.textContent = "Loading...";

    axios.get(API_URL)
        .then(response => {
            apiOut.textContent = response.data.quote;
        })
        .catch(err => {
            console.error("error: ", err);
        })
        .finally(() => {
            loadingStatus.textContent = "";
        });
});