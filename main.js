document.addEventListener("DOMContentLoaded", init);

let kimenet;

function init(){
    kimenet = document.getElementById("kimenet");
    document.getElementById("mintaszoveg").addEventListener("input", mintaszovegValtozas);
    document.getElementById("betumeret").addEventListener("input", betumeretValtozas);
    document.getElementById("szovegszin").addEventListener("input", szovegszinValtozas);
    document.getElementById("hatterszin").addEventListener("input", hatterszinValtozas);
    document.getElementById("alaphelyzet").addEventListener("click", alaphelyzet);
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