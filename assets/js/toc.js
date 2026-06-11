function initToc() {
  const content = document.querySelector(".post-content");
  const toc = document.querySelector("#toc");

  if (!content || !toc) return;

  tocbot.init({
    tocSelector: "#toc",
    contentSelector: ".post-content",
    ignoreSelector: "[data-toc-skip]",
    headingSelector: "h2, h3",
    orderedList: false,
    scrollSmooth: false
  });
}

document.addEventListener("DOMContentLoaded", initToc);