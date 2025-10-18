const gallery = document.getElementById("gallery");

for (let i = 1; i <= 6; i++) {
    const img = document.createElement("img");
    img.src = `images/pic_${i}.jpg`;
    gallery.appendChild(img);
}