let images = document.querySelectorAll(".gold");
let main_images = document.querySelector(".mainIMg");
images.forEach(imag => {
    imag.addEventListener("click", function() {

        console.log(imag.src)
        main_images.src = imag.src;
    })
})