let menuVisible = false;
//FUNCION QUE OCULTA O MUESTRA EL MENU
function mostrarOcultarMenu(){
if(menuVisible){
    document.getElementById("nav").classList="";
    menuVisible = false;
}else{
    document.getElementById("nav").classList="responsive";
    menuVisible = ture;
}
}
function seleccionar(){
    //oculto el menu una vez que seleccione una opcion
    document.getElementById("nav").classList="";
    menuVisible = false;
}
//funcion que aplica las animaciones en las habilidades
