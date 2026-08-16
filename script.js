/* ==================================================
   CONFIGURAÇÕES
================================================== */

// Coloque aqui o endereço real da sua loja
const SITE_OFICIAL = "https://seusite.com.br";


/* ==================================================
   BOTÃO ACESSAR SITE
================================================== */

const btnSite = document.getElementById("btnSite");

btnSite.addEventListener("click", function () {

    window.location.href = SITE_OFICIAL;

});


/* ==================================================
   BOTÃO FECHAR
================================================== */

const btnFechar = document.getElementById("btnFechar");

btnFechar.addEventListener("click", function () {

    // Tenta voltar para a página anterior
    if (window.history.length > 1) {

        window.history.back();

    } else {

        // Caso não exista página anterior
        window.location.href = SITE_OFICIAL;

    }

});


/* ==================================================
   ANIMAÇÃO DOS PRODUTOS
================================================== */

const produtos = document.querySelectorAll(".produto");

produtos.forEach((produto, index) => {

    produto.style.opacity = "0";

    produto.style.transform = "translateY(15px)";

    setTimeout(() => {

        produto.style.transition =
            "opacity .5s ease, transform .5s ease";

        produto.style.opacity = "1";

        produto.style.transform =
            "translateY(0)";

    }, 150 + (index * 100));

});