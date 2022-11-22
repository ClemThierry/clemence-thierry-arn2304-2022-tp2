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

const landscapeTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: "#section2",
        start: "top top",
        end: "+=6000",
        pin: true,
        toggleActions: "play pause resume pause",
        markers: true,
        onLeave: ({}) => clearInterval(winkingInterval),
        onEnterBack: winkingNose,
        onEnter: winkingNose
    }
});

gsap.set("#rudolphSection1", { scale: -1 });


landscapeTimeline
    .call(clearTextArea, ["#storyFirstPart>p"])
    .from("#section2>.landscape:nth-child(3)", { y: '200%' })
    .from(".brume", { opacity: 0, duration: 0.5 }, "+=1")
    .from("#section2>.landscape:nth-child(2)", { duration: 1, y: '200%' })
    .from("#section2>.landscape:nth-child(5)", { duration: 1, x: '200%' })
    .from("#section2>.landscape:nth-child(6)", { duration: 1, y: '-200%' })
    .to("#rudolphSection1", {
        scale: -2,
        duration: 8,
        repeat: -1,
        repeatDelay: 3,
        ease: "power1.inOut",
        motionPath: {
            path: "#ReindeerPath",
            align: "#ReindeerPath",
            autoRotate: true,
            alignOrigin: [0.5, 0.8]
        }
    })
    .from("#storyFirstPart", { opacity: 0 })
    .call(textApparition, ["Il était une fois, dans un endroit que nous connaissons tous, un petit renne nommé Rudolph. Il aimait beaucoup virvolter depuis la maison du père Noël jusqu’à la forêt enchantée. Il se distinguait des autres rennes par son nez rouge qui scintillait tel une étoile dans la nuit. Aux yeux des gens, ce nez était charmant, mais, en réalité, il complexait beaucoup notre ami.", "#storyFirstPart>p"])


function clearTextArea(divId) {
    document.querySelector(divId).innerHTML = "";
}

function textApparition(text, divId) {
    let words = text.split(" ");
    let i = 0;
    words.forEach(word => {
        setTimeout(function() {
            document.querySelector(divId).innerHTML += word + " ";
        }, i += 80);
    });
}
let winkingInterval;

function winkingNose() {
    winkingInterval = setInterval(function() {
        console.log("changement");
        if (document.querySelector("#rudolphSection1").getAttribute("src") == "images/Reindeer/VolNez0.svg") {
            document.querySelector("#rudolphSection1").setAttribute("src", "images/Reindeer/VolNez1.svg")
        } else {
            document.querySelector("#rudolphSection1").setAttribute("src", "images/Reindeer/VolNez0.svg")
        }
    }, 500);
}

// function clearWinkingInterval() {
//     clearInterval(winkingInterval);
// }


// gsap.to("#rudolphSection1", {
//     scale: -2,
//     duration: 10,
//     repeat: -1,
//     repeatDelay: 3,
//     ease: "power1.inOut",
//     motionPath: {
//         path: "#ReindeerPath",
//         align: "#ReindeerPath",
//         autoRotate: true,
//         alignOrigin: [0.5, 0.8]
//     }
// });






/*Part 3 : Rudolph in the forest*/

gsap.to(".atmosphere", {
    scrollTrigger: {
        markers: true,
        trigger: "#section3",
        start: "20% center",
        end: "70% center",
        // toggleActions: "restart pause reverse pause"
    },
    opacity: 0.7
});

gsap.to("#section3", {
    scrollTrigger: {
        markers: true,
        trigger: "#section3",
        start: "20% center",
        end: "70% center",
        // toggleActions: "restart pause reverse pause"
    },
    backgroundColor: "#2d4069"
});