const fulImgBox = document.getElementById("fulImgBox"),
fulImg = document.getElementById("fulImg");

function openImage(reference) {
    fulImgBox.style.display = "flex";
    fulImg.src = reference;
}

function closeImg() {
    fulImgBox.style.display = "none";
}