const changeBackgroundOnNavbar = () => {
  // console.log("coucou !");
  const navbar = document.querySelector('.navbar-lewagon');
  if (navbar) {
    // console.log(window.innerHeight);
    window.addEventListener('scroll', () => {
      // console.log(window.scrollY);
      if (window.scrollY >= window.innerHeight) {
        navbar.classList.add('navbar-lewagon-white');
      } else {
        navbar.classList.remove('navbar-lewagon-white');
      }
    });
  }
}

export { changeBackgroundOnNavbar };