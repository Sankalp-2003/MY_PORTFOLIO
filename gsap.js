gsap.from('.works-lp',{
  x:'-50vw',
  duration: 1,
  scrollTrigger:{
    trigger:'.works-lp',
    scroller:'body',
    // markers: 'true',
    start:'top 80%',
  }
})

gsap.from('.works-mp',{
  x:'50vw',
  duration: 1,
  scrollTrigger:{
    trigger:'.works-mp',
    scroller:'body',
    // markers: 'true',
    start:'top 80%',
  }
})

gsap.from('.works-aw',{
  opacity:0,
  y:'50vw',
  duration: 1,
  scrollTrigger:{
    trigger:'.works-lp',
    scroller:'body',
    // markers: 'true',
    start:'top 80%',
  }
})