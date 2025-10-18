function pseudoHandleImageType(imageTypeString) {
    if(imageTypeString == "png") return pseudoHandlePng;
    else if(imageTypeString == "jpg") return pseudoHandleJpg;

    return "Can't handle your image type! " + imageTypeString;
}

function pseudoHandleJpg() {
    return "Handling JPG";
}

function pseudoHandlePng() {
    return "Handling PNG";
}

console.log(pseudoHandleImageType("png")())
console.log(pseudoHandleImageType("jpg")())
console.log(pseudoHandleImageType("mov"))
