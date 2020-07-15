const newGame = (arg) => {
    let temp = document.getElementById("starter");
    temp.setAttribute("style", "visibility: visible;");
    document.getElementById("field").setAttribute("style","visibility: hidden");
    if (typeof arg === "boolean"){
        if (!arg){
            document.getElementById("message").innerHTML = "Player1 won"
        } else {
            document.getElementById("message").innerHTML = "Player2 won"
        }
    } else {
        document.getElementById("message").innerHTML = "Draw!"
    }
}

const clean = () => {
    let a = document.getElementById("field");
    for (let item in a.children){
        if(a.children[item] instanceof HTMLElement){
            a.children[item].innerHTML = "";
        }
    }
    document.getElementById("starter").setAttribute("style", "visibility: hidden;");
    document.getElementById("field").setAttribute("style","visibility: visible");
    field = new FC();
}