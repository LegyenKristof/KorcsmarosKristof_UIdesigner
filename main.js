document.addEventListener("DOMContentLoaded", init);

let kimenet;
let kedvencek = [];

class Kedvenc{
    
    constructor(mintaszoveg, betumeret, szovegszin, hatterszin) {
        this.mintaszoveg = mintaszoveg;
        this.betumeret = betumeret;
        this.szovegszin = szovegszin;
        this.hatterszin = hatterszin;
        this.gomb = document.createElement("button");
        this.gomb.id = "" + kedvencek.length;
        this.gomb.innerHTML = "Kedvenc " + (parseInt(this.gomb.id) + 1);
        this.gomb.style.width = "100%";
        this.gomb.style.margin = "5px";
        this.gomb.addEventListener("click", kedvencValtas)
        document.getElementById("kedvencek").appendChild(
            document.createElement("div").appendChild(this.gomb)
        );
    }

}

function init(){
    kimenet = document.getElementById("kimenet");
    document.getElementById("mintaszoveg").addEventListener("input", mintaszovegValtozas);
    document.getElementById("betumeret").addEventListener("input", betumeretValtozas);
    document.getElementById("szovegszin").addEventListener("input", szovegszinValtozas);
    document.getElementById("hatterszin").addEventListener("input", hatterszinValtozas);
    document.getElementById("alaphelyzet").addEventListener("click", alaphelyzet);
    document.getElementById("kedvenc").addEventListener("click", ujKedvenc);
}

function mintaszovegValtozas(e){
    kimenet.innerHTML = e.target.value;
    if(e.target.value.trim() == ""){
        document.getElementById("hibauzenet").style.display = "block";
    }
    else{
        document.getElementById("hibauzenet").style.display = "none";
    }
}

function betumeretValtozas(e){
    kimenet.style.fontSize = e.target.value + "pt";
}

function szovegszinValtozas(e){
    kimenet.style.color = e.target.value;
}

function hatterszinValtozas(e){
    kimenet.style.backgroundColor = e.target.value;
}

function alaphelyzet(){
    document.getElementById("mintaszoveg").value = "Árvíztűrő tükörfúrógép";
    document.getElementById("betumeret").value = 12;
    document.getElementById("szovegszin").value = "#000000";
    document.getElementById("hatterszin").value = "#FFFFFF";
    kimenet.innerHTML = "Árvíztűrő tükörfúrógép";
    kimenet.style.backgroundColor = "#FFFFFF";
    kimenet.style.color = "#000000";
    kimenet.style.fontSize = "12pt";
    document.getElementById("hibauzenet").style.display = "none";
}

function ujKedvenc(){
    kedvencek.push(new Kedvenc(
        document.getElementById("mintaszoveg").value,
        document.getElementById("betumeret").value,
        document.getElementById("szovegszin").value,
        document.getElementById("hatterszin").value
    ));
}

function kedvencValtas(e){
    let id = parseInt(e.target.id);
    document.getElementById("mintaszoveg").value = kedvencek[id].mintaszoveg;
    document.getElementById("betumeret").value = kedvencek[id].betumeret;
    document.getElementById("szovegszin").value = kedvencek[id].szovegszin;
    document.getElementById("hatterszin").value = kedvencek[id].hatterszin;

    kimenet.style.backgroundColor = kedvencek[id].hatterszin;
    kimenet.style.color = kedvencek[id].szovegszin;
    kimenet.style.fontSize = kedvencek[id].betumeret + "pt";
    kimenet.innerHTML = kedvencek[id].mintaszoveg;
    if(kedvencek[id].mintaszoveg.trim() == ""){
        document.getElementById("hibauzenet").style.display = "block";
    }
    else{
        document.getElementById("hibauzenet").style.display = "none";
    }
}