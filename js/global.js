
  // Hamburger Menu Animation JS
  const menuTrigger = document.querySelector('.menu-trigger');
  const dropdownMenu = document.querySelector(".dropdownMenu")
  menuTrigger.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle('active-1');
    $(dropdownMenu).slideToggle()
  });


  // Go to Top
  // GSAP Scroll trigger plugin 

  // Add scroll eventlistener to window to track scroll
  $(window).scroll(function(){
      // when the distance of the area outside the top of the document is greater than the height of the window screen,
      if($(document).scrollTop()>$(window).height()){
          // #toTop icon will appear
          gsap.to("#toTop", {opacity:1, ease:"power2"});
      }else{
          // Otherwise, the icon #totop disappears, meaning that the top of the document is at the top
          gsap.to("#toTop", {opacity:0, ease:"power2"});
      }
  })


  // when user clicks #toTop icon, the scroll will to to the top
  const scrollTop =()=>{

      // the documernt will be scrolled to the top where is position y=0 
      // scrollTo:{y:0}
      gsap.to(document, {duration: 3, scrollTo:{y:0}, ease: "power2"});
  }
