gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

/*****************/
/*Global function*/
/*****************/

function textApparition(text, divId) {
    let words = text.split(" ");
    let i = 0;
    clearTextArea(divId);
    words.forEach(word => {
        setTimeout(function() {
            document.querySelector(divId).innerHTML += word + " ";
        }, i += 80);
    });
}

function clearTextArea(divId) {
    document.querySelector(divId).innerHTML = "";
}

/*Menu*/

document.querySelectorAll("nav a").forEach(function(link) {
    link.addEventListener("click", function() {
        document.querySelector("#check").checked = false;
        openCloseMenu();
    })
})

document.querySelector("#openMenu input").addEventListener("click", () => {
    openCloseMenu();
    gsap.from('nav>ul>li', { delay: 0.7, scale: 0, duration: 1, ease: "power4.out", stagger: 0.2 });
});

function openCloseMenu() {
    document.querySelector("nav").classList.toggle("open");
}

/***********/
/*Section 1*/
/***********/

/*Snowflakes*/

let allSnowflakes = document.querySelectorAll(".snowflake");
let nbSnowflakes = allSnowflakes.length;

allSnowflakes.forEach(function(snowflake, index) {
    snowflake.style.left = Math.floor(Math.random() * (document.body.offsetWidth - snowflake.style.width)) + "px";
    snowflake.style.animationDelay = (10 / nbSnowflakes) * index + "s, " + Math.round((Math.random() * 2) * 100) / 100 + "s";
});

gsap.to(".snowflake", {
    scrollTrigger: {

        trigger: "#section1",
        start: "center center",
        end: "60% center",
        scrub: 2,
        toggleActions: "restart pause reverse pause"
    },
    opacity: 0
});

/*Clouds*/

gsap.to(".cloud", {
    scrollTrigger: {

        trigger: "#section1",
        start: "center center",
        scrub: 2,
        toggleActions: "restart pause reverse pause"
    },
    xPercent: 200
});

/***********/
/*Section 2*/
/***********/

let winkingInterval;
const landscapeTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: "#section2",
        start: "top top",
        end: "+=6000",
        pin: true,
        scrub: 2,
        toggleActions: "play pause resume pause",
        onLeave: ({}) => clearInterval(winkingInterval),
        onEnterBack: winkingNose,
        onEnter: winkingNose,
    }
});


landscapeTimeline
    .from("#section2>.landscape:nth-child(3)", { y: '100vh' })
    .from(".brume", { opacity: 0 })
    .from("#section2>.landscape:nth-child(2)", { y: '100vw' })
    .from("#section2>.landscape:nth-child(5)", { x: '100vw' })
    .from("#section2>.landscape:nth-child(6)", { y: '-100vh' })
    .from("#storyFirstPart", { opacity: 0 })
    .call(textApparition, ["Il ??tait une fois, dans un endroit que nous connaissons tous, un petit renne nomm?? Rudolph. Il aimait beaucoup virvolter depuis la maison du p??re No??l jusqu????? la for??t enchant??e. Il se distinguait des autres rennes par son nez rouge qui scintillait tel une ??toile dans la nuit. Aux yeux des gens, ce nez ??tait charmant, mais, en r??alit??, il complexait beaucoup notre ami.", "#storyFirstPart>p"], "<")

gsap.set("#rudolphSection1", { scale: -1 });
gsap.to("#rudolphSection1", {
    scale: -2,
    duration: 8,
    repeat: -1,
    repeatDelay: 3,
    ease: "power1.inOut",
    scrollTrigger: {

        trigger: "#section2",
        start: "20% center",
        end: "70% center",
    },
    motionPath: {
        path: "#ReindeerPath",
        align: "#ReindeerPath",
        autoRotate: true,
        alignOrigin: [0.5, 0.8]
    }
})

function winkingNose() {
    winkingInterval = setInterval(function() {
        if (document.querySelector("#rudolphSection1").getAttribute("src") == "images/Reindeer/VolNez0.svg") {
            document.querySelector("#rudolphSection1").setAttribute("src", "images/Reindeer/VolNez1.svg")
        } else {
            document.querySelector("#rudolphSection1").setAttribute("src", "images/Reindeer/VolNez0.svg")
        }
    }, 500);
}

/***********************************/
/*Section 3 : Rudolph in the forest*/
/***********************************/

let flyingRudolph = gsap.timeline({
    paused: true,
    yoyo: true,
    repeat: -1
}).to("#flyingRudolphSection3", { y: '-8%' });

const forestTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: "#section3",
        start: "top top",
        end: "+=6000",
        pin: true,
        scrub: 2,

    }
});

forestTimeline
    .addLabel("playFlying")
    .add(function() { flyingRudolph.play() }, 'playFlying')
    .from("#section3>#backgroundSection3", { x: '-100vw' })
    .to(".atmosphere", { opacity: 0.7 }, "<")
    .to("#section3", { backgroundColor: "#2d4069" }, "<")
    .addLabel("pausedFlying")
    .add(function() { flyingRudolph.pause() }, 'pausedFlying')
    .to("#flyingRudolphSection3", { opacity: 0 }, "<")
    .from("#sittingRudolphSection3", { opacity: 0 }, "<")
    .from("#section3 .storyPara", { opacity: 0 })
    .call(textApparition, ["Un jour, il s???aventura plus loin qu????? son habitude dans la for??t. Peu ?? peu, la nuit commen??a ?? tomber. Rudolph, perdu et effray??, se mit ?? penser : ", "#section3 .storyPara>p"], "<")
    .from(".persoAssis>p", { opacity: 0 })
    .call(textApparition, ["Quelle id??e ai-je eu de partir si loin, jamais plus je ne reverrais les miens.", ".persoAssis>p"], "<")
    .from(".transitionForest", { opacity: 0 })

/***********/
/*Section 4*/
/***********/

let noseSection4;
const santaTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: "#section4",
        start: "top top",
        end: "bottom center",
        scrub: 10,
        pin: true,
        toggleActions: "play pause resume pause",
        onLeave: ({}) => clearInterval(noseSection4),
        onEnterBack: winkingNosePart4,
        onEnter: winkingNosePart4,
        markers: true
    }
});

function winkingNosePart4() {
    noseSection4 = setInterval(() => {
        document.querySelector(".nosePart4").classList.toggle("noseOn");
    }, 800);
}

santaTimeline
    .from("#santa", {
        x: 1000,
        y: 1000,
    })
    .from("#section4 .storyPara", { opacity: 0 })
    .call(textApparition, ["Le p??re No??l, inquiet de ne pas voir son renne pr??f??r?? rentrer, d??cida de partir ?? sa recherche. Il s'enfon??a dans la for??t. Sans rel??che il criait le nom de notre ami. Plus il avan??ait et moins il y voyait. Si bien qu???au bout d???un moment l???obscurit?? l???avait emport??. Rudolph entendit son nom au loin. L???espoir qui le gagna ??tait si fort qu???il fit scintiller son nez. Cette lueur per??a l???obscurit?? ce qui permit au P??re No??l de le retrouver.", "#section4 .storyPara>p"], "<")
    .from(".santaDialog", { scale: 0 })
    .to(".santaDialog", { scale: 0 })
    .to(".santaDialog", { x: -80, y: -20 })
    .to(".santaDialog", { scale: 2 })
    .to(".santaDialog", { scale: 0 })
    .to("#santa", { x: -100 })


document.querySelector("#section4").addEventListener("mouseover", (e) => {
    let x = e.clientX;
    let y = e.clientY;
    document.querySelector("#backgroundSection4").style.clipPath = "circle(10% at " + (x / document.querySelector("#section4").clientWidth) * 100 + "% " + (y / document.querySelector("#section4").clientHeight) * 100 + "%)";
})

/***********/
/*Section 5*/
/***********/

const endTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: "#section5",
        start: "top top",
        end: "center center",
        scrub: 10,

    }
});

gsap.from(".bigFire", { transformOrigin: "bottom center", scale: 0.9, duration: .6, repeatDelay: .4, repeat: -1, yoyo: true });
gsap.from(".littleFire", { transformOrigin: "bottom center", scale: 0.9, duration: .5, repeatDelay: .4, repeat: -1, yoyo: true }, "<");


endTimeline
    .from(".brick", 1, {
        y: -300,
        transformOrigin: "center",
        ease: "power1.inOut",
        delay: 0.2,
        stagger: {
            amount: 1.5,
            grid: "auto",
            from: "random"
        }
    })
    .from(".fireplace", { yPercent: -200, ease: "power1.inOut" })
    .from(".fire", { transformOrigin: "bottom center", opacity: 0, scale: 0 })
    .to(".fire", { opacity: 0, duration: .2 })
    .to(".bigFire", { opacity: 1 }, "<")
    .to(".littleFire", { opacity: 1 }, "<")
    .from(".santaSection5", { xPercent: 200 })
    .from(".reindeerSection5", { xPercent: -200 })
    .from("#section5 .storyPara", { opacity: 0 })
    .call(textApparition, ["De retour chez eux, petit renne et le P??re No??l se r??chauff??rent au coin du feu. C???est alors que Rodolph se dit qu???il n???avait jamais ??tait aussi heureux d???avoir un nez lumineux. <br><br> <p>FIN</p>", "#section5 .storyPara>p"], "<")

/*******/
/*Music*/
/*******/

let music = document.querySelector("#music");
music.loop = true;

document.querySelector("#musicIcon").addEventListener("click", () => {
    if (music.paused) {
        playMusic();
        gsap.to("#musicIcon>div", { scale: 0 })
    } else {
        pauseMusic();
        gsap.to("#musicIcon>div", { scale: 1 })
    }
})

//Play
function playMusic() {
    music.play();
}

//Pause
function pauseMusic() {
    music.pause();
}