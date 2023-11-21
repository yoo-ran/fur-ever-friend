
    const menuTrigger = document.querySelector('.menu-trigger');
    const dropdownMenu = document.querySelector(".dropdownMenu")
    menuTrigger.addEventListener('click', (event) => {
      event.currentTarget.classList.toggle('active-1');
      $(dropdownMenu).slideToggle()
    });


