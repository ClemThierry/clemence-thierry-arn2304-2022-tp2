document.querySelectorAll("nav a").forEach(function(link) {
    link.addEventListener("click", function() {
        document.querySelector("nav").style.display = "none";
    })
})


// gsap.to("#section3", {
//     scrollTrigger: {
//         markers: true,
//         trigger: "#section3",
//         start: "top center",
//         scrub: 2,
//         toggleActions: "restart pause reverse pause"
//     },
//     // duration: 1,
//     background: 'blue'
// });

let allSnowflakes = document.querySelectorAll(".snowflake");
let nbSnowflakes = allSnowflakes.length;

allSnowflakes.forEach(function(snowflake, index) {
    // console.log("hello");
    snowflake.style.left = Math.floor(Math.random() * (document.body.offsetWidth - snowflake.style.width)) + "px";
    snowflake.style.animationDelay = (10 / nbSnowflakes) * index + "s, " + Math.round((Math.random() * 2) * 100) / 100 + "s";
});

// let random = gsap.utils.random;
// gsap.fromTo("#section1>.snowflake",
//     {
//         // x: random(0, window.innerWidth),
//         xPercent: "random(0,100)",
//         y: -10,
//     }, {
//         y: window.innerHeight,
//         duration: 10
//     }
// );

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
landscapeTimeline.from("#section2>.landscape:nth-child(2)", { y: '100%' }).from("#section2>.landscape:nth-child(1)", { y: '100%' }).from("#section2>.landscape:nth-child(3)", { y: '-100%' }).from("#storyFirstPart", { opacity: 0 }).call(textApparition("Le chat est vert."));
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