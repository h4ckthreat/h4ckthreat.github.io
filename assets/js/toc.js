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

  // sincroniza mobile depois do render do TOC
  requestAnimationFrame(() => {
    const mobileToc = document.querySelector("#mobile-toc");
    if (mobileToc) {
      mobileToc.innerHTML = toc.innerHTML;
    }
  });
}

document.addEventListener("DOMContentLoaded", initToc);