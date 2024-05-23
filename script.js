gsap.to("#nav", {
    backgroundColor : "#000",
    duration:0.5,
    height :  "90px",
    scrollTrigger : {
        trigger: "#nav",
        scroller : "body",
        markers : false,
        start :"top -10%",
        end : "top -11%",
        scrub : 1
    }
}) 