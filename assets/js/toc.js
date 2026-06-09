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
  }
});
