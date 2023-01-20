document.addEventListener("DOMContentLoaded", function (event) {

    // Get the modal
    const modal = document.getElementById("image-popup-modal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    const img = document.querySelectorAll("img.modal-popup-able");
    const modalImg = document.getElementById("img01");

    const popupImageModalHandler = function (event) {
        console.log(this);
        let src = "";

        if (this.getAttribute("src")) {
            src = this.getAttribute("src");
        } else if (this.getAttribute("srcset")) {
            src = this.getAttribute("srcset").slice(0, -3);
        }

        modal.style.display = "block";
        modalImg.setAttribute('src', src);
    }

    img.forEach(imgNode => {
        imgNode.addEventListener('click', popupImageModalHandler);
    });

    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }
});

function zoom(e) {
    var zoomer = e.currentTarget;
    e.offsetX ? (offsetX = e.offsetX) : (offsetX = e.touches[0].pageX);
    e.offsetY ? (offsetY = e.offsetY) : (offsetX = e.touches[0].pageX);
    x = (offsetX / zoomer.offsetWidth) * 100;
    y = (offsetY / zoomer.offsetHeight) * 100;
    zoomer.style.backgroundPosition = x + "% " + y + "%";
}
