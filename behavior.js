document.addEventListener("DOMContentLoaded", function (event) {
    // alert('Hello!');
    var thumbnailElement = document.getElementById("smart_thumbnail");
    thumbnailElement.className;

    thumbnailElement.addEventListener("click", function () {
        if (thumbnailElement.className == "small") {
            thumbnailElement.className = "";
        } else {
            thumbnailElement.className = "small";
        }

    });

});