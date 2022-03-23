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

const intro1 = document.getElementsByClassName('intro1')[0];

setTimeout(() => {
  intro1.classList.remove('fade-in');
}, 3500);



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

