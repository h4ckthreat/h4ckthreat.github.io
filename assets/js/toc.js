document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".post-content")) {

    // Inicializa o TOCBot normal (desktop)
    tocbot.init({
      tocSelector: "#toc",
      contentSelector: ".post-content",
      ignoreSelector: "[data-toc-skip]",
      headingSelector: "h2, h3",
      orderedList: false,
      scrollSmooth: false
    });

    // Copia o TOC para o modal do celular
    setTimeout(() => {
      const toc = document.querySelector("#toc");
      const mobileToc = document.querySelector("#mobile-toc");

      if (toc && mobileToc) {
        mobileToc.innerHTML = toc.innerHTML;
      }
    }, 100);

    // Elementos do modal
    const modal = document.querySelector(".mobile-toc-modal");
    const openBtn = document.querySelector(".mobile-toc-toggle");
    const closeBtn = document.querySelector(".mobile-toc-close");
    const mobileToc = document.querySelector("#mobile-toc");

    if (modal && openBtn && closeBtn) {

      // Abre o modal
      openBtn.addEventListener("click", () => {
        modal.classList.add("open");
      });

      // Fecha pelo botão X
      closeBtn.addEventListener("click", () => {
        modal.classList.remove("open");
      });

      // Fecha clicando fora da janela
      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          modal.classList.remove("open");
        }
      });

      // Fecha ao selecionar um item do índice
      mobileToc?.addEventListener("click", (e) => {
        if (e.target.closest("a")) {
          modal.classList.remove("open");
        }
      });

      // Fecha ao pressionar ESC
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          modal.classList.remove("open");
        }
      });
    }

  }
});
