const burger = document.getElementById('btn'),
      modal = document.querySelector(".modal"),
      logo = document.querySelector(".header__logo"),
      body = document.getElementById('body'),
      closeMenu = document.querySelectorAll('.modal__links'),
      head = document.querySelector('.header');

burger.addEventListener('click', (e)=> {
    e.target.classList.toggle('active');
    modal.classList.toggle('active');
    logo.classList.toggle('no--logo');
    body.classList.toggle('no--scroll');
    head.classList.toggle('no--bg');
});

closeMenu.forEach(el => el.addEventListener('click', ()=> {
    burger.classList.remove('active');
    modal.classList.remove('active');
    logo.classList.remove('no--logo');
    body.classList.remove('no--scroll');
    head.classList.remove('no--bg');
  }));

  let waypoint = new Waypoint({
    element: document.getElementById('sos'),
    handler: function(direction) {
      let header = document.getElementById('header');
      if(direction === 'down') {
        header.classList.add('active');
      } else {
        header.classList.remove('active');
      }
    }
  });