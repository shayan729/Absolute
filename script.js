
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".about",
    start: "0% 95%",
    end: "20% 30%",
    scrub: true,
    // markers: true
  }
});

tl.to(".fanta", {
  left: "0%",
  top: "133.3%",
  rotate: "90",
  ease: "power1.inOut"
}, "fantaEnd");
tl.to(".leaf",{
left:"80%",
top:"100%",
rotate:"120",
ease:"ease-in"
},"fantaEnd")

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".about",
    start: "0% 95%",
    end: "20% 30%",
    scrub: true,
    // markers: true
  }
});

tl2.from(".luffy", {
  left: "-100%",
  opacity: 0,
  ease: "power2.out",
  duration: 1
}, "fantaEnd+=4.5");

var tl3 =gsap.timeline({scrollTrigger:{
  trigger:".products",
  start: "0% 95%",
  end:"20% 30%",
  scrub:true,
  // markers:true
}})
tl3.from("#cocacola",{
  rotate: "-90deg",
  top: "190%",
  left: "-100%",
}, 'ca')
tl3.from("#pepsi",{
  rotate: "60deg",
  top: "220%",
  left: "75%",
}, 'ca');
tl3.from("#slice-orange1",{
  rotate: "-90deg",
  top: "180%",
  left: "-100%",
},"ca+=0.1")
tl3.from("#slice-orange2",{
  rotate: "60deg",
  top: "220%",
  left: "75%",
},"ca+=0.1")
tl3.to(".fanta",{
  rotate:"0deg",
  top:"205%",
  left:"37%",
})
