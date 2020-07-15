function FC() {
    this.map = [[undefined,undefined,undefined],[undefined,undefined,undefined],[undefined,undefined,undefined]],
    this.turn = true
};

field = new FC();

const turn = (x,y) => {
    if (typeof field.map[x][y] !== "number"){
        if (field.turn){
            field.map[x][y] = 1;
        } else {
            field.map[x][y] = 2;
        }
        newSign(x,y,field.turn);
        field.turn = !field.turn;
    } else {
        alert("field is taken, try again");
    }
    check(x,y)
    console.log(field.map)
}


const newSign = (x, y, arg) => {
    let a = document.getElementById("item" + x + y);
    let b = document.createElement("h3");
    if (arg){
        document.getElementById("player").innerHTML = "Player2's turn"
        b.innerHTML = "X"
    } else {
        document.getElementById("player").innerHTML = "Player1's turn"
        b.innerHTML = "O"
    }
    b.setAttribute("id", "symbol");
    a.appendChild(b);
    
}