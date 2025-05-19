document.addEventListener("DOMContentLoaded", function () {
    const rodape = document.createElement("footer");
    rodape.className = "rodape";
  
    const hoje = new Date();
    const dataFormatada = hoje.toLocaleDateString("pt-BR");
  
    rodape.innerHTML = `<p>Versão 1.02 - Data: ${dataFormatada} - contato: VivaraResidencia@outlook.com</p>`;
    document.body.appendChild(rodape);
  });
  
