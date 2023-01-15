const navLinks = document.querySelectorAll(".nav_link");
const copyrightElm = document.querySelector("#copyright");
const contactModal = document.querySelector("#submit");
const modalOverlay = document.querySelector(".modal-overlay");
const closeModal = document.querySelectorAll(".close-modal");
let currentNavlink;

copyrightElm.innerHTML = `${document.title} ${copyrightElm.innerText}`;
navLinks.forEach((elm) => {
  const navPath = elm.getAttribute("href");
  const currentPath = window.location.pathname;
  console.log(navPath, currentPath);
  if (navPath == currentPath) {
    elm.classList.add("active");
    document.querySelector(".logo").innerHTML = elm.innerHTML;
    document.title = `${elm.innerHTML} | Sports News`;
  }
});

contactModal.addEventListener("click", function (e) {
  e.preventDefault();
  modalOverlay.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  window.scrollTo(0, 0);
});

closeModal.forEach((elm) => {
  elm.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.classList.contains("close-modal")) {
      modalOverlay.classList.add("hidden");
      document.body.style.overflow = "auto";
    }
  });
});
