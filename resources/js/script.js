// controlling nav-bar-content
let navBar = document.querySelector(".nav-bar");

navBar.onclick = function () {
  let navBarIcon = document.getElementById("icon");
  let content = document.getElementById("content");

  if (navBarIcon.classList.contains("fa-bars")) {
    navBarIcon.className = "fas fa-times";
    content.style.display = "block";
  } else {
    navBarIcon.className = "fas fa-bars";
    content.style.display = "none";
  }
};
