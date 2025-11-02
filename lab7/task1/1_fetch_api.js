let fetchButton = document.getElementById("fetchButton");
let axiosButton = document.getElementById("axiosButton");
let fetchPhotos = document.getElementById("fetchPhotos");
let loadingStatus = document.getElementById("loadingStatus");

const API_URL = "https://dog.ceo/api/breeds/image/random";

fetchButton.addEventListener("click", () => {
    loadingStatus.textContent = "Loading...";

    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            fetchPhotos.src = data.message;
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
            fetchPhotos.src = response.data.message;
        })
        .catch(err => {
            console.error("error: ", err);
        })
        .finally(() => {
            loadingStatus.textContent = "";
        });
});