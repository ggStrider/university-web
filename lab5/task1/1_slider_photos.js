///////// VARIABLES ///////////
const imagesLength = 6;
const imagesStartIndex = 1;

const imagePrefix = "pic_";
const imageExtension = ".jpg";

const pathToImages = "./images/";

let currentImageIndex = 1;
let photo = document.getElementById("photo");

let images = getImages(imagesLength);
///////////////////////////////

function getImages(maxIndex) {

    let images = [];

    for (let i = 1; i <= maxIndex; i++) {

        images[i - 1] = `${pathToImages}${imagePrefix}${i}${imageExtension}`;
    }

    return images;
}

function repeat(current, minInclusive, lengthInclusive) {

    if(current > lengthInclusive) {

        current = minInclusive;
    }
    else if(current < minInclusive) {

        current = lengthInclusive;
    }

    return current;
}

function increaseIndexOfCurrentImageBy(delta) {

    currentImageIndex = repeat(currentImageIndex + delta, imagesStartIndex, imagesLength);
    photo.src = images[currentImageIndex - 1];
}

function main() {

    let rightButton = document.getElementById("rightButton");
    let leftButton = document.getElementById("leftButton");

    rightButton.addEventListener("click", () => {

        increaseIndexOfCurrentImageBy(1)
    });

    leftButton.addEventListener("click", () => {

        increaseIndexOfCurrentImageBy(-1)
    });
}

main();