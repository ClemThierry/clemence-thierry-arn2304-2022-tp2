document.querySelectorAll("nav a").forEach(function(link) {
    link.addEventListener("click", function() {
        //document.querySelector("nav").style.display = "none";
        openCloseMenu();
    })
})

document.querySelector("#openMenu input").addEventListener("click", openCloseMenu);

function openCloseMenu() {
    document.querySelector("nav").classList.toggle("open");  
}


let allSnowflakes = document.querySelectorAll(".snowflake");
let nbSnowflakes = allSnowflakes.length;

allSnowflakes.forEach(function(snowflake, index) {
    snowflake.style.left = Math.floor(Math.random() * (document.body.offsetWidth - snowflake.style.width)) + "px";
    snowflake.style.animationDelay = (10 / nbSnowflakes) * index + "s, " + Math.round((Math.random() * 2) * 100) / 100 + "s";
});


gsap.to(".snowflake", {
    scrollTrigger: {
        markers: true,
        trigger: "#section1",
        start: "center center",
        end: "60% center",
        scrub: 2,
        toggleActions: "restart pause reverse pause"
    },
    // duration: 1,
    opacity: 0
});

/*Clouds*/

gsap.to(".cloud", {
    scrollTrigger: {
        markers: true,
        trigger: "#section1",
        start: "center center",
        scrub: 2,
        toggleActions: "restart pause reverse pause"
    },
    // duration: 1,
    xPercent: 200
});

/*Landscape*/

const landscapeTimeline = gsap.timeline();
landscapeTimeline.from("#section2>.landscape:nth-child(3)", { y: '100%' }).from(".brume", {opacity: 0, duration:2}, "+=1").from("#section2>.landscape:nth-child(2)", { y: '100%' }).from("#section2>.landscape:nth-child(5)", { y: '-100%' }).from("#storyFirstPart", { opacity: 0 }).call(textApparition("Le chat est vert."));
// landscapeTimeline.call(textApparition("Le chat est bleu"), null, "<+=3");


ScrollTrigger.create({
    animation: landscapeTimeline,
    trigger: "#section2",
    start: "top top",
    // end: "+=1000",
    scrub: true,
    pin: true,
    anticipatePin: 1
});

function textApparition(text) {
    let words = text.split(" ");
    words.forEach(word => {
        console.log(word);
    });
}

/*Part 3 : Rudolph in the forest*/

gsap.to("#section3", {
    scrollTrigger: {
        markers: true,
        trigger: "#section3",
        start: "20% center",
        end: "80% center",
        scrub: 2,
        toggleActions: "restart pause reverse pause"
    },
    // duration: 1,
    background: '#1d4046'
});