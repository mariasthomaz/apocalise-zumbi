function escolhajohn(){
    var fase1john = prompt("Digite o número da sua escolha");

    while (fase1john != "2" && fase1john != "1") {
        var fase1john = prompt("Digite o número da sua escolha");
    }

    if (fase1john === "1"){
        alert ("Você passou de fase!");
        window.location.href="../fase-2/fase2-2.html"
    }
    else if (fase1john ==="2"){
        window.location.href="../gameover.html"
    }
}