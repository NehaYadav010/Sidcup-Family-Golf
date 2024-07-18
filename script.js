gsap.to("#nav",{
    backgroundColor: "black",
    duration: 0.5,
    height : "10.5vw",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true, 
        start: "top -10%",
        end: "top -11%",
        scrub:1
    }
})
gsap.to("#main",{
    duration: 1.5,
    backgroundColor: "black",
    scrollTrigger:{
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -30%",
        end: "top -80vh",
        scrub:3
    }
})
//CURSOR ANIMATION
var crs = document.querySelector("#cursor");
var crsrblr = document.querySelector("#cursor-blur");
document.addEventListener("mousemove",function(dets){
    crs.style.left = dets.x+20 + "px"  //jab cursor aur div takra rahe ho tab add kardo taki thoda dur rahe
    crs.style.top = dets.y + "px"
    crsrblr.style.left = dets.x - 150 + "px"
    crsrblr.style.top = dets.y - 150 + "px"
})

// NAVIGATION ANIMATION OF CURSOR
var h4 = document.querySelectorAll("nav h4");
h4.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crs.style.scale = 2;
        crs.style.backgroundColor = "transparent";
        crs.style.border = "1px solid white";
    })
    elem.addEventListener("mouseleave",function(){
        crs.style.scale = 1;
        crs.style.backgroundColor = "#95C11E";
        crs.style.border = "none";
    })
})

// CURSOR ANIMATION ON CARDS
var cards = document.querySelectorAll(".card")
cards.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crs.style.scale = 2;
        crs.style.backgroundColor = "transparent";
        crs.style.border = "1px solid #fff"
    });
    elem.addEventListener("mouseleave",function(){
        crs.style.scale = 1;
        crs.style.backgroundColor = "#95C11E";
        crs.style.border = "none";
    })
})
// ABOUT US GSAP ANIMATION

gsap.from("#about-us img,#abt",{
    y:60,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers: true,
        start:"top 60%",
        end:"top 58%",
        scrub:3
    }
})
// CARDS GSAP ANIMATION

gsap.from(".card",{
    scale:0.8,
    duration:1,
    opacity:0,
    // stagger: 2,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers: true,
        start:"top 70%",
        end:"top 58%",
        scrub:3
    }
})
// GSAP FOR COLON
gsap.from("#colon1",{
    x:-70,
    y:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller: "body",
        // markers:true,
        start: "top 40%",
        end:"top 30%",
        scrub:4
    }
})
gsap.from("#colon2",{
    x:70,
    y:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller: "body",
        // markers:true,
        start: "bottom 40%",
        end:"bottom 30%",
        scrub:4
    }
})
// GSAP FOR H1 IN LABEL PART
gsap.from("#labels h1",{
    y:60,
    scrollTrigger:{
        trigger:"#labels h1",
        scroller:"body",
        start: "top 90%",
        end: "top 75%",
        scrub:3
    }
})
// CURSOR ANIMATIONS ON FOOTER

var icon = document.querySelectorAll("#f1 i")
icon.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crs.style.scale = 2.5;
        crs.style.backgroundColor = "transparent";
        crs.style.border = "1px solid #fff"
    });
    elem.addEventListener("mouseleave",function(){
        crs.style.scale = 1;
        crs.style.backgroundColor = "#95C11E";
        crs.style.border = "none";
    })
})

var head = document.querySelectorAll(".foot h3")
head.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crs.style.scale = 2;
        crs.style.backgroundColor = "transparent";
        crs.style.border = "1px solid #fff";
    });
    elem.addEventListener("mouseleave",function(){
        crs.style.scale = 1;
        crs.style.backgroundColor = "#95C11E";
        crs.style.border = "none";
    })
})

// ARROW - CURSOR ANIMATION CREATED
var arrow = document.querySelector("#page1 #arrow")
arrow.addEventListener("mouseover",()=> {
    crs.style.scale = 2;
    crs.style.border = "1px solid #fff";
    crs.style.backgroundColor = "transparent";
})
arrow.addEventListener("mouseleave",()=> {
    crs.style.scale = 1;
    crs.style.border = "none";
    crs.style.backgroundColor = "#95C11E";
})


/* Navigation bar responsive */
