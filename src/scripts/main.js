document.getElementById("botaoSugestao").addEventListener("click", function() {
    var comidas = [
        "Pizza",
        "Hambúrguer",
        "Sushi",
        "Salada",
        "Frango grelhado",
        "Macarrão",
        "Tacos",
        "Churrasco"
    ];

    var sugestao = comidas[Math.floor(Math.random() * comidas.length)];
    document.getElementById("sugestao").innerHTML = "Que tal comer " + sugestao + " hoje?";
});
