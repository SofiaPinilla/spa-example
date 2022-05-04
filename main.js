const home = document.getElementById("home");
const about = document.getElementById("about");
const contact = document.getElementById("contact");
const homeNav = document.getElementById("homeNav");
const aboutNav = document.getElementById("aboutNav");
const contactNav = document.getElementById("contactNav");

function goHome() {
  hideView();
  home.classList.remove("hide");
}

function goAbout() {
  hideView();
  about.classList.remove("hide");
}

function goContact() {
  hideView();
  contact.classList.remove("hide");
}

function hideView() {
  home.classList.add("hide");
  about.classList.add("hide");
  contact.classList.add("hide");
}

homeNav.addEventListener("click", goHome);
aboutNav.addEventListener("click", goAbout);
contactNav.addEventListener("click", goContact);
