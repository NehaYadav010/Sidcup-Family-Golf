gsap.to("#nav",{
    backgroundColor: "black",
    duration: 0.5,
    height : "10.5vw",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        markers: true, 
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
        markers: true,
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