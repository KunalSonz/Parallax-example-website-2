let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();



timeline.to(".Fold1rock",5,{y:-200})
.to(".Fold1girl",5 ,{y:-200}, "-=5")
.fromTo(".Fold1bg",{y:-200},{ y: 0,duration:5 }, "-=5")
.to(".Fold2bg",5,{y:-1000},"-=5")
.to(".Fold2moon",5,{y:-750},"-=5")
.to(".Fold2mount",5,{y:-700},"-=5")
.to(".Fold2road",5,{y:-700},"-=5")
.to(".secondTitle",5,{y:-700},"-=5")
// .to(".fold3",10,{top:"10%"},"-=2")




let scene = new ScrollMagic.Scene({
  triggerElement : ".fold1",
  duration:"100%",
  triggerHook: 0 ,
})

.setTween(timeline)
.addTo(controller)
.setPin(".fold1")

let controler = new ScrollMagic.Controller();
let timeLine = new TimelineMax();

timeline.to(".Fold2moon",10,{x:-200})
.fromTo(".Fold2mount",{y:0},{ y: -900,duration:10 }, "-=10")

let scene2 = new ScrollMagic.Scene({
  triggerElement:".fold2",
  duration:"100%",
  triggerHook: 1 ,
})

.setTween(timeLine)
.addTo(controler)
.setPin(".fold2")