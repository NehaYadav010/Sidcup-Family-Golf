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
    crs.style.left = dets.x + "px"
    crs.style.top = dets.y + "px"
    crsrblr.style.left = dets.x - 150 + "px"
    crsrblr.style.top = dets.y - 150 + "px"
})