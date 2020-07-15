const check = (x,y) => {
    if ((field.map[x][0] == field.map[x][1] && field.map[x][1] == field.map[x][2] && typeof field.map[x][1] == "number") ||
        (field.map[0][0] == field.map[1][1] && field.map[1][1] == field.map[2][2] && typeof field.map[1][1] == "number") ||
        (field.map[2][0] == field.map[1][1] && field.map[1][1] == field.map[0][2] && typeof field.map[1][1] == "number") ||
        (field.map[0][y] == field.map[1][y] && field.map[1][y] == field.map[2][y] && typeof field.map[x][y] == "number"))
        {
        newGame(field.turn);
    } else if (field.map.every(item => item.every(temp => {
        return !!item[temp]}))){
        newGame("draw");
    }
}