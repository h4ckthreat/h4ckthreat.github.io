document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".post-content")) {
    tocbot.init({
      tocSelector: "#toc",
      contentSelector: ".post-content",
      ignoreSelector: "[data-toc-skip]",
      headingSelector: "h2, h3",
      orderedList: false,
      scrollSmooth: false
    });

    // copia o TOC do desktop para o TOC do celular
    const toc = document.querySelector("#toc");
    const mobileToc = document.querySelector("#mobile-toc");

    if (toc && mobileToc) {
      setTimeout(() => {
        mobileToc.innerHTML = toc.innerHTML;
      }, 100);
    }
  }
});

const toggle = document.querySelector(".mobile-toc-toggle");
const links = document.querySelector(".mobile-toc-links");

if (toggle && links) {
  toggle.addEventListener("click", () => {
    links.classList.toggle("open");
  });
}
