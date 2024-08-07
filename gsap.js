const mm = gsap.matchMedia();

mm.add("(min-width: 600px",()=>{
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
})

if(window.innerWidth < 600){
  const lp = document.querySelector('.works-lp')
  const aw = document.querySelector('.works-aw')
  const mp = document.querySelector('.works-mp')

  function opacityAnimation(elem){
    elem.style.opacity = 0
  window.addEventListener('scroll',()=>{
    let variabel = elem.getBoundingClientRect().top;
    // console.log(lpWork);
    
    if(variabel < 700){
      elem.style.opacity = 1
    }
  })
  }
  opacityAnimation(lp)
  opacityAnimation(aw)
  opacityAnimation(mp)


}

