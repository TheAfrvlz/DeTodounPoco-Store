var tog = 0;
function myFunction(x) {
  x.classList.toggle("change");
  console.log(tog);
  if(tog === 0){
    document.getElementById("Menu_V1").style.height="340px";
    tog = 1;
  }
  else{
    document.getElementById("Menu_V1").style.height="90px";
    tog = 0;
  }
}

function resizeMenu(){
  x =  window.matchMedia("(max-width:  1214px)");
  if(x.matches && tog === 1){
    tog = 0;
    document.getElementById("Menu_V1").style.height="90px";
    console.log("ventana menor a e742");
    document.querySelector("#hambur").classList.toggle("change");
  }

}

window.addEventListener('resize', resizeMenu);

function mouseOver(x) {
  x =  window.matchMedia("(max-width: 1214px)")
  if(x.matches){
    document.getElementById("Menu_V1").style.height= "528px";
  }

}

function mouseOut(x) {
  x =  window.matchMedia("(max-width: 1214px)")
  if(x.matches){
    document.getElementById("Menu_V1").style.height= "340px";
  }
}

