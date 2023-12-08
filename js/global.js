

    const menuTrigger = document.querySelector('.menu-trigger');
    const dropdownMenu = document.querySelector(".dropdownMenu")
    menuTrigger.addEventListener('click', (event) => {
      event.currentTarget.classList.toggle('active-1');
      $(dropdownMenu).slideToggle()
    });


    
    // $(function(){
    //   $('#adoption').counto(1100, 3000);
    //   $('#rescue').counto(2048, 3000);
    //   $('#client').counto(950, 3000);
    //   $('#services').counto(410, 3000);
    // });