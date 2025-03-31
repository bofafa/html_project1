// const navBtn = document.getElementById('nav-toggle');
// const links = document.getElementById('nav-links');

// navBtn.addEventListener("click", ()=>{
//   links.classList.toggle("show-links");
//   links.classList.toggle("nav-links");
// });

const navBtn = document.getElementById('nav-toggle');
const links = document.getElementById('nav-links');

// 切換 menu
navBtn.addEventListener("click", () => {
  links.classList.toggle("show-links");
});

// 🆕 當 resize > 768px，就移除 .show-links
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    links.classList.remove("show-links");
  }
});
