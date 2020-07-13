const field = {
    map : [[],[],[]],
    turn : true,
}

const turn = (x,y) => {
    const temp = field.map[x];
    if (typeof(temp[y]) != "string"){
        if (field.turn){
            temp[y] = 1;
        } else {
            temp[y] = 0;
        }
    } else {
        if(!confirm ("Field is taken, try again?")){
            return;
        }
    }
    // field.turn = !field.turn;
    if (check(x,y)){
        return;
    };
}

const createhoriz = (row) => {
    console.log("a");
};

const createvert = (col) => {

};

const creatediag13 = () => {

}

const creatediag31 = () => {

}

const creatediag = () => {
    
}

const check = (x,y) => {
    if (field.map[x].every(item => item == field.map[x][0]) && typeof field.map[x][y] == "number"){
        createhoriz(x);
        console.log("1")
    } else if (field.map[0][0] == field.map[1][1] && field.map[1][1] == field.map[2][2] && typeof field.map[1][1] == "number") {
        creatediag13();
        console.log("2")
    } else if (field.map[2][0] == field.map[1][1] && field.map[1][1] == field.map[0][2] && typeof field.map[1][1] == "number") {
        creatediag31();
        console.log("3")
    } else if (field.map[0][y] == field.map[1][y] && field.map[1][y] == field.map[2][y] && typeof field.map[x][y] == "number") {
        createvert(y);
        console.log("4")
    }
}

const congrats = (who) => {
    alert(who);
}

turn(1,2);

console.log(field.map)