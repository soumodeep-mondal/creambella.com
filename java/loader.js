var myVar;

function myFunction(){
    myVar = setTimeout(hiding, 2000);
    myVar = setTimeout(showPage,1000);
}

function showPage(){
    document.getElementById("preload").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}

function hiding(){
    document.getElementById("preload").style.animation = "fadeout 1s ease";
    document.getElementById("myDiv").style.animation = "fadein 1s ease";
}