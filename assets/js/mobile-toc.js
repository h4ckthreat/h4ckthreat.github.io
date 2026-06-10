window.addEventListener("load", () => {

  const btn = document.getElementById("mobile-toc-btn");
  const modal = document.getElementById("mobile-toc-modal");
  const close = document.getElementById("mobile-toc-close");
  const content = document.getElementById("mobile-toc-content");

  if (!btn || !modal || !close || !content) {
    return;
  }

  btn.addEventListener("click", () => {

    modal.classList.add("show");

    const toc =
      document.querySelector("#toc") ||
      document.querySelector("#toc-wrapper ul") ||
      document.querySelector(".toc ul");

    if (toc) {
      content.innerHTML = toc.outerHTML;
    }

  });

  close.addEventListener("click", () => {
    modal.classList.remove("show");
  });

});
