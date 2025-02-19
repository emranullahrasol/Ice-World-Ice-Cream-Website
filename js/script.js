const menuBtn = document.getElementById("nav__toggler");
const navLinks = document.getElementById("list");
const menuBtnIcon = menuBtn.querySelector("use");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "xlink:href",
    isOpen ? "images/sprite.svg#close" : "images/sprite.svg#bars"
  );
});
