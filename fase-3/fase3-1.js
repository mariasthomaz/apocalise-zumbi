function escolhacassie(){
    var fase1cassie = prompt("Digite o número da sua escolha");

    while (fase1cassie != "2" && fase1cassie != "1") {
        var fase1cassie = prompt("Digite o número da sua escolha");
    }
    
    if (fase1cassie === "2"){
        alert ("Você conseguiu escapar do apocalipse Zumbi, parabéns!!");
        window.location.href="../index.html"
    }
    else if (fase1cassie ==="1"){
        window.location.href="../gameover.html"
    }
}