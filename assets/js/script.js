const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");
const ham1 = document.getElementById("ham1");
const ham2 = document.getElementById("ham2");
const ham3 = document.getElementById("ham3");

hamburger.addEventListener("click", () => {
    const isHidden = mobileMenu.classList.contains("hidden");

    if (!isHidden) {
        mobileMenu.classList.add("hidden");
        mobileMenu.classList.remove("flex");
        ham1.style.transform = "";
        ham2.style.opacity = "1";
        ham3.style.transform = "";
        ham3.style.width = "1rem";
    } else {
        mobileMenu.classList.remove("hidden");
        mobileMenu.classList.add("flex");
        ham1.style.transform = "translateY(7px) rotate(45deg)";
        ham2.style.opacity = "0";
        ham3.style.transform = "translateY(-7px) rotate(-45deg)";
        ham3.style.width = "1.5rem";
    }
});
