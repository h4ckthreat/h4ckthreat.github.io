document.addEventListener("DOMContentLoaded", () => {

  const toc = document.querySelector("#toc");

  if (!toc) return;

  document.getElementById("mobile-toc-content").innerHTML = toc.innerHTML;

  document
    .getElementById("mobile-toc-btn")
    .addEventListener("click", () => {
      document
        .getElementById("mobile-toc-modal")
        .classList.add("show");
    });

  document
    .getElementById("mobile-toc-close")
    .addEventListener("click", () => {
      document
        .getElementById("mobile-toc-modal")
        .classList.remove("show");
    });

});
