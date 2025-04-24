document.addEventListener("DOMContentLoaded", function () {
    const rodape = document.createElement("footer");
    rodape.className = "rodape";
  
    const hoje = new Date();
    const dataFormatada = hoje.toLocaleDateString("pt-BR");
  
    rodape.innerHTML = `<p>Versão 1.0 - Atualizado em ${dataFormatada}</p>`;
    document.body.appendChild(rodape);
  });
  