document.addEventListener("DOMContentLoaded", () => {

  const toc = document.querySelector("#toc");

  if (!toc) return;

  document.getElementById("mobile-toc-content").innerHTML = toc.innerHTML;

  // Abrir modal
  document
    .getElementById("mobile-toc-btn")
    .addEventListener("click", () => {
      document
        .getElementById("mobile-toc-modal")
        .classList.add("show");
    });

  // Fechar pelo X
  document
    .getElementById("mobile-toc-close")
    .addEventListener("click", () => {
      document
        .getElementById("mobile-toc-modal")
        .classList.remove("show");
    });

  // Fechar clicando fora da caixa
  document
    .getElementById("mobile-toc-modal")
    .addEventListener("click", (e) => {
      if (e.target.id === "mobile-toc-modal") {
        e.currentTarget.classList.remove("show");
      }
    });

  // Fechar ao selecionar um item do conteúdo
  document
    .getElementById("mobile-toc-content")
    .addEventListener("click", (e) => {
      if (e.target.closest("a")) {
        document
          .getElementById("mobile-toc-modal")
          .classList.remove("show");
      }
    });

});
