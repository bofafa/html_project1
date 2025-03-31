// 取得漢堡 icon 同 menu element
const navBtn = document.getElementById('nav-toggle');
const links = document.getElementById('nav-links');

// 👉 點擊漢堡 icon：打開／收起 dropdown menu
navBtn.addEventListener("click", () => {
  links.classList.toggle("show-links");
});

// 👉 所有 scroll link
const scrollLinks = document.querySelectorAll(".scroll-link");

// 👉 點擊 scroll link 時：滾動 + 收起 menu
scrollLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    // ✅ 使用 currentTarget 確保正確拿到 <a>
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    // ✅ 計算位置（假設 navbar 高度為 64px）
    const position = element.offsetTop - 64;

    // ✅ 平滑滾動到指定區塊
    window.scrollTo({
      top: position,
      left: 0,
      behavior: "smooth"
    });

    // ✅ 收起 dropdown menu
    links.classList.remove("show-links");
  });
});
