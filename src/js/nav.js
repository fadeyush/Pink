function showNav () {
  const navToggle = document.querySelector(".page-header__toggle");
  const navMain = document.querySelector(".main-nav");

  navToggle.addEventListener("click", function () {
    if (navMain.classList.contains("main-nav--closed")) {
      navMain.classList.remove("main-nav--closed");
      navMain.classList.add("main-nav--opened");
    } else {
      navMain.classList.add("main-nav--closed");
      navMain.classList.remove("main-nav--opened");
    }
  })
}

// export default showNav;

module.exports = showNav;
