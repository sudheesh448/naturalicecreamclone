let A=0
let B=0
let c=0
document.getElementById("navbar-expand-button").
addEventListener("click",myfunction)
function myfunction(){ 
    A++;
    console.log(A)
   if(A==1){document.getElementById("mobileview").style.display="flex";
   document.getElementById("navbar-expand-button-i").className="fa-solid fa-xmark";
   }
   else {
    document.getElementById("mobileview").style.display="none";
    document.getElementById("navbar-expand-button-i").className="fa-solid fa-bars";
    A=0;
   }
}

document.getElementById("products-mobile-view").
addEventListener("click",productsmobile)
function productsmobile(){ 
    B++;
    if(B==1){document.getElementById("mobile-products-drop-down").style.display="flex";}
    else {
        document.getElementById("mobile-products-drop-down").style.display="none";
    B=0;
}
    console.log(10)
}

/* search desktop*/

document.getElementById("search-desktop").addEventListener("click",searchclicked)
function searchclicked(){
    
    document.getElementById("search").style.display="block";
}

document.getElementById("search-close").addEventListener("click",searchx)
function searchx(){
    document.getElementById("search").style.display="none";
}


document.getElementById("drop-down-desktop-btn").addEventListener("click",productclicked)
function productclicked(){
    c++;
    if(c==1){document.getElementById("drop-downrow").style.display="block";
    document.getElementById("caret").className="fa fa-caret-down"
    }
    else {
        document.getElementById("drop-downrow").style.display="none"
        document.getElementById("caret").className="fa fa-caret-up";
    c=0;
}
console.log(25)
}

document.getElementById("mobile-search").addEventListener("click",searchclicked)
function searchclicked(){
    
    document.getElementById("search").style.display="block";
}

document.getElementById("search-close").addEventListener("click",searchx)
function searchx(){
    document.getElementById("search").style.display="none";
}




