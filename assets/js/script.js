const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");
const ham1 = document.getElementById("ham1");
const ham2 = document.getElementById("ham2");
const ham3 = document.getElementById("ham3");

hamburger.addEventListener("click", () => {
    const isOpened = mobileMenu.classList.contains("hidden");

    if (!isOpened) {
        // Closing the menu
        mobileMenu.classList.add("hidden");
        mobileMenu.classList.remove("flex");
        ham1.style.transform = "";
        ham2.style.opacity = "1";
        ham3.style.transform = "";
        ham3.style.width = "1rem";
        document.body.style.overflow = "auto"; // Re-enable scroll
    } else {
        // Opening the menu
        mobileMenu.classList.remove("hidden");
        mobileMenu.classList.add("flex");
        ham1.style.transform = "translateY(7px) rotate(45deg)";
        ham2.style.opacity = "0";
        ham3.style.transform = "translateY(-7px) rotate(-45deg)";
        ham3.style.width = "1.5rem";
        document.body.style.overflow = "hidden"; // Disable scroll
    }
});

function playVideo() {
    const container = document.getElementById("video-container");
    const videoId = "-EE0W5Lg738"; // Your YouTube ID

    // Replace the inner content with the iframe
    container.innerHTML = `
            <div class="aspect-[820/529] w-full">
                <iframe 
                    src="https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0" 
                    class="w-full h-full "
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
        `;
}

document.addEventListener("DOMContentLoaded", function () {
    var splide = new Splide("#feedback-slider", {
        type: "loop",
        drag: "free",
        focus: "center",
        perPage: 5,
        gap: "30px",
        autoplay: true,
        interval: 1000,
        pauseOnHover: false,
        arrows: false,
        pagination: true,
        breakpoints: {
            1024: {
                perPage: 5,
            },
            768: {
                perPage: 1,
                padding: "10%",
            },
        },
    });

    splide.mount();
});

// counter animation
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");

    if (counters.length > 0) {
        const speed = 100;

        const startCounter = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = +counter.getAttribute("data-target");

                    const updateCount = () => {
                        const count = +counter.innerText;
                        // Calculate increment based on target to keep speeds consistent
                        const inc = target / speed;

                        if (count < target) {
                            counter.innerText = Math.ceil(count + inc);
                            setTimeout(updateCount, 20);
                        } else {
                            counter.innerText = target;
                        }
                    };

                    updateCount();
                    // Stop observing once the animation has run
                    observer.unobserve(counter);
                }
            });
        };

        const observer = new IntersectionObserver(startCounter, {
            threshold: 0.5, // Trigger when 50% of the element is visible
        });

        counters.forEach((counter) => observer.observe(counter));
    }
});
