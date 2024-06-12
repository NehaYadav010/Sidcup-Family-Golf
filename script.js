gsap.to("#nav",{
    backgroundColor: "black",
    duration: 0.5,
    height : "10.5vw",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        markers: true, 
        start: "top -10%",
        end: "-11%",
        scrub:1
    }
})