// var btnMenu = document.getElementById("svgMenu")


// btnMenu.addEventListener("toggle",()=>{
//     console.log("click")
//    let menu = document.getElementById("menuoptions");
//    menu.classList ="clicado"
// })


function menu(){
    console.log("ABC")
  let menuMobile = document.getElementById("menuoptions");

  if(menuMobile.classList.contains('clicado')){
    menuMobile.classList.remove('clicado');
  }else{
    menuMobile.classList.add('clicado');
  }

}