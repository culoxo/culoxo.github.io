
//BOTON QUIERO SABER MÁS

let btn_quieroSaber = document.getElementById("btnSaberMas");
btn_quieroSaber.onclick = mostrar;
let mostrado = false;

let body = document.body;
let letrasCambio = document.getElementById('cambioDiseno');
let fondoFoto = document.getElementById('contenido-Inicio');
let header = document.getElementsByClassName('menu');
let presentacion = document.getElementsByClassName('inicio');
let botones = document.getElementsByClassName('btn');
let conocimiento = document.getElementsByClassName('contenido-curriculum');
let curriculum = document.getElementsByClassName('contenido-misConocimientos');
let proyectos = document.getElementsByClassName('contenido-misProyectos');

function mostrar() {

    let contenido = document.getElementById("restoTexto");
    if (mostrado == false) {
        contenido.style.display = 'block';
        btn_quieroSaber.textContent = "Quiero saber menos"
        mostrado = true;
    }
    else {
        contenido.style.display = 'none';
        mostrado = false;
        btn_quieroSaber.textContent = "Quiero saber más"
    }
}


function cambiodiseno2() {
    letrasCambio.style.color = 'red';
    body.style = ' background: #b2f9ff; background: -moz-linear-gradient(135deg,  #b2f9ff 0%,#efebbe 100%); background: -webkit-linear-gradient(135deg,  #b2f9ff 0%,#efebbe 100%); background: linear-gradient(135deg,  #b2f9ff 0%,#efebbe 100%);color: black';
    fondoFoto.style = ' background: #b2f9ff; background: -moz-linear-gradient(45deg,  #b2f9ff 0%,#efebbe 100%); background: -webkit-linear-gradient(45deg,  #b2f9ff 0%,#efebbe 100%); background: linear-gradient(45deg,  #b2f9ff 0%,#efebbe 100%);color: black';
    for (var i = 0; i < header.length; i++) {
        header[i].style.fontFamily = 'Comic Neue';
    }
    for (var i = 0; i < presentacion.length; i++) {
        presentacion[i].style.fontFamily = 'Comic Neue';
    }
    for (var i = 0; i < botones.length; i++) {
        botones[i].style.fontFamily = 'Comic Neue Bold';
        botones[i].style.backgroundColor = 'rgb(106, 159, 206)';
        botones[i].style.borderRadius = '30px';
        botones[i].style.border = '3px solid aqua';
    }
    for (var i = 0; i < conocimiento.length; i++) {
        conocimiento[i].style.fontFamily = 'Comic Neue';
    }
    for (var i = 0; i < curriculum.length; i++) {
        curriculum[i].style.fontFamily = 'Comic Neue';
    }
    for (var i = 0; i < proyectos.length; i++) {
        proyectos[i].style.fontFamily = 'Comic Neue';
    }
}

function cambiodiseno3() {
    letrasCambio.style.color = 'rgb(209, 124, 124)';
    body.style = 'background: aliceblue';
    fondoFoto.style.background = 'aliceblue';
    body.style.color = 'black';
    for (var i = 0; i < header.length; i++) {
        header[i].style.fontFamily = 'Roboto Condensed';
    }
    for (var i = 0; i < presentacion.length; i++) {
        presentacion[i].style.fontFamily = 'Roboto Condensed';

    }
    for (var i = 0; i < botones.length; i++) {
        botones[i].style.fontFamily = 'Roboto Condensed';
        botones[i].style.backgroundColor = 'rgb(209, 124, 124)';
        botones[i].style.borderRadius = '30px 30px 0px 0px';
        botones[i].style.border = '3px solid yellow';


    }
}

function estadoOriginal() {
    letrasCambio.style.color = 'aqua';
    body.style = 'black';
    fondoFoto.style = 'black';
    for (var i = 0; i < header.length; i++) {
        header[i].style.fontFamily = 'Permanent Marker';
    }
    for (var i = 0; i < presentacion.length; i++) {
        presentacion[i].style.fontFamily = 'Permanent Marker';

    }
    for (var i = 0; i < botones.length; i++) {
        botones[i].style.fontFamily = 'Permanent Marker';
        botones[i].style.backgroundColor = 'aliceblue';
        botones[i].style.borderRadius = '0px';
        botones[i].style.border = '2px solid aqua';
    }
    for (var i = 0; i < conocimiento.length; i++) {
        conocimiento[i].style.fontFamily = 'Permanent Marker';
    }
    for (var i = 0; i < curriculum.length; i++) {
        curriculum[i].style.fontFamily = 'Permanent Marker';
    }
    for (var i = 0; i < proyectos.length; i++) {
        proyectos[i].style.fontFamily = 'Permanent Marker';
    }
}

let menuVisible = false;
let menu = document.getElementsByClassName('menu');

function mostrarOcultarMenu() {
    if (menuVisible && screen.width < 980) {
        document.getElementById("nav").classList = "";
        for (var i = 0; i < menu.length; i++) {
            menu[i].style.display = "none";
        }
        menuVisible = false;

    }
    else if (screen.width > 980) {
        document.getElementById("nav").classList = "";
    }
    else {
        document.getElementById("nav").classList = "responsive";
        for (var i = 0; i < menu.length; i++) {
            menu[i].style.display = "block";
        }
        menuVisible = true;

    }

}

function seleccionar() {
    if (screen.width < 980) {
        document.getElementById("nav").classList = "";
        for (var i = 0; i < menu.length; i++) {
            menu[i].style.display = "none";
        }
        menuVisible = false;
    }
}