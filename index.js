function play(){  
    var player1 = Math.floor(Math.random()*6)+1;
    var imageSelection1 = "./Assests/dice"+player1+".png";
    document.querySelectorAll("img")[0].setAttribute("src",imageSelection1);

    var player2 = Math.floor(Math.random()*6)+1;
    var imageSelection2 = "./Assests/dice"+player2+".png";
    document.querySelectorAll("img")[1].setAttribute("src",imageSelection2);

    if(player1 === player2){
    document.querySelector("h1").textContent="Match Draw!!!";
    }else if(player1 > player2){
    document.querySelector("h1").textContent="🎉 Player1 Wins 🚩";
    }else{
    document.querySelector("h1").textContent="🎉 Player2 Wins 🚩";
    }
}
