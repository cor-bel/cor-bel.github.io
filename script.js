window.addEventListener('scroll', function() {
    let scrollPos = window.scrollY;

    document.querySelector('.title').style.transform = `translateY(${scrollPos * (-0.6)}px)`;
  });

window.addEventListener('scroll', function () {
  const navbar = document.getElementById('menuid');
  if (window.scrollY > 300) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

