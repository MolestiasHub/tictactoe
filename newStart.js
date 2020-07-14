const newGame = () => {
    document.getElementById("starter").setAttribute("style", "visibility: visible;");
    document.getElementById("field").setAttribute("style","visibility: hidden");
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

const gege = () => {
    window.open('','_parent',''); 
    window.close();
}