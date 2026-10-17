/* Esto es una funcion llamada mostrar que dice si el id conjuntos esta en el estado none
 osea que no se este mostrando pase a mostrarse y si no esta en el estado none entonces 
 que se oculte cada que se llame la funcion*/
function mostrar() {
    if (document.getElementById("conjuntos").style.display == "none") {
        document.getElementById("conjuntos").style.display = "block";
    } else {
        document.getElementById("conjuntos").style.display = "none";
    }
}
function Mostrar() {
    if (document.getElementById("Unidad1").style.display == "none") {
        document.getElementById("Unidad1").style.display = "block";
    } else {
        document.getElementById("Unidad1").style.display = "none";
    }
}
function Show() {
    document.getElementById("respuesta").style.display = "block";
}

function unidad2(){
    if (document.getElementById("uni2").style.display == "none") {
        document.getElementById("uni2").style.display = "block";
    } else {
        document.getElementById("uni2").style.display = "none";
    }
}

function mostrartema(){
     if (document.getElementsByClassName("tema_unidad2")[0].style.display == "none") {
        document.getElementsByClassName("tema_unidad2")[0].style.display = "block";
    } else {
        document.getElementsByClassName("tema_unidad2")[0].style.display = "none";
    }
}
function mostrartema2(){
     if (document.getElementsByClassName("tema_unidad2")[1].style.display == "none") {
        document.getElementsByClassName("tema_unidad2")[1].style.display = "block";
    } else {
        document.getElementsByClassName("tema_unidad2")[1].style.display = "none";
    }
}

/* plantilla del profe, condicon para mostrar y evitar errores */
 const contenedorLista = document.getElementById('lista-entradas');

        if (typeof publicaciones !== 'undefined' && publicaciones.length > 0) {
            publicaciones.forEach(post => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <a href="entrada.html?id=${post.id}">${post.titulo}</a>
                    <span class="fecha-post">${post.fecha}</span>
                    <p class="resumen-post">${post.resumen}</p>
                `;
                contenedorLista.appendChild(li);
            });
        } else {
            contenedorLista.innerHTML = '<li>No hay entradas publicadas aún.</li>';
        }

    const contenedorLista2 = document.getElementById('lista-entrada');

        if (typeof publicaciones2 !== 'undefined' && publicaciones2.length > 0) {
            publicaciones2.forEach(post => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <a href="entrada.html?ID=${post.ID}">${post.title}</a>
                    <span class="fecha-post">${post.date}</span>
                    <p class="resumen-post">${post.short}</p>
                `;
                contenedorLista2.appendChild(li);
            });
        } else {
            contenedorLista2.innerHTML = '<li>No hay entradas publicadas aún.</li>';
        }

        


        // Funciones de interacción rápida
        function cambiarColorTitulo() {
            var titulo = document.getElementById('titulo');
            titulo.classList.toggle('cambio-color');
        }

        function alternarLista(id) {
            var lista = document.getElementById(id);
            lista.classList.toggle('oculto');
        }

        function resaltarElemento(elemento) {
            elemento.classList.toggle('resaltado');
        }

        function resaltarElemento2(elemento) {
            elemento.classList.toggle('resaltado');
        }


        // Funciones de interacción rápida
        function cambiarColorTitulo() {
            var titulo = document.getElementById('titulo');
            titulo.classList.toggle('cambio-color');
        }

        function alternarLista(id) {
            var lista = document.getElementById(id);
            lista.classList.toggle('oculto');
        }

        function resaltarElemento(elemento) {
            elemento.classList.toggle('resaltado');
        }