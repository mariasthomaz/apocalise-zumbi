function escolhacassie(){
    var fase1cassie = prompt("Digite o número da sua escolha");

    while (fase1cassie != "2" && fase1cassie != "1") {
        var fase1cassie = prompt("Digite o número da sua escolha");
    }
    
    if (fase1cassie === "1"){
        alert ("Você passou de fase!");
        window.location.href="/Fase 3/fase3-1.html"
    }
    else if (fase1cassie ==="2"){
        window.location.href="../gameover.html"
    }
}