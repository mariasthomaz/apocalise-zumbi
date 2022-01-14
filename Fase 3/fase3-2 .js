function escolhajohn(){
    var fase1john = prompt("Digite o número da sua escolha");

    while (fase1john != "2" && fase1john != "1") {
        var fase1john = prompt("Digite o número da sua escolha");
    }
    
    if (fase1john === "2"){
        alert ("Você conseguiu escapar do apocalipse Zumbi, parabéns!!");
        window.location.href="../index.html"
    }
    else if (fase1john ==="1"){
        window.location.href="../gameover.html"
    }
}