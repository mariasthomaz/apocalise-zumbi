function escolhaandie(){
    var fase1andie = prompt("Digite o número da sua escolha");

    while (fase1andie != "2" && fase1andie != "1") {
        var fase1andie = prompt("Digite o número da sua escolha");
    }

    if (fase1andie === "1"){
        alert ("Você passou de fase!");
        window.location.href="../fase-2/fase2-3.html";
    }
    else if (fase1andie ==="2"){
        window.location.href="../gameover.html"
    }
}