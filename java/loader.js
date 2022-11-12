var myVar;

function myFunction(){
    myVar = setTimeout(hiding, 1000);
    myVar = setTimeout(showPage,500);
}

function showPage(){
    document.getElementById("preload").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}

function hiding(){
    document.getElementById("preload").style.animation = "fadeout 1s ease";
    document.getElementById("myDiv").style.animation = "fadein 1s ease";
}