function slide1(){
document.getElementById('id').src="img/dragar.png";
setTimeout("slide2()", 1000)
}

function slide2(){
document.getElementById('id').src="img/dragnsei.png";
setTimeout("slide3()", 1000)
}

function slide3(){
document.getElementById('id').src="img/dragon.png";
setTimeout("slide4()", 1000)
}
function slide4(){
    document.getElementById('id').src="img/dragicon.png";
    setTimeout("slide1()", 1000)
    }
