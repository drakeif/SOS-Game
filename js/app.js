const burger = document.getElementById('btn'),
      modal = document.querySelector(".modal"),
      logo = document.querySelector(".header__logo"),
      body = document.getElementById('body'),
      closeMenu = document.querySelectorAll('.modal__links');

burger.addEventListener('click', (e)=> {
    e.target.classList.toggle('active');
    modal.classList.toggle('active');
    logo.classList.toggle('no--logo');
    body.classList.toggle('no--scroll');
});

closeMenu.forEach(el => el.addEventListener('click', ()=> {
    burger.classList.remove('active');
    modal.classList.remove('active');
    logo.classList.remove('no--logo');
    body.classList.remove('no--scroll');
  }));