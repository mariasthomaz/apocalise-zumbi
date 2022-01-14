function escolhaandie(){
    var fase1andie = prompt("Digite o número da sua escolha");

    while (fase1andie != "2" && fase1andie != "1") {
        var fase1andie= prompt("Digite o número da sua escolha");
    }
    
    if (fase1andie === "2"){
        alert ("Você conseguiu escapar do apocalipse Zumbi, parabéns!!");
        window.location.href="../index.html"
    }
    else if (fase1andie==="1"){
        window.location.href="../gameover.html"
    }
}