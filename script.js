'use strict'
// DECLARO LAS FUNCIONES
function agregarTarea() {
    if (tareaAgregada != "" && tareaAgregada != null) {
        // CREO UNA LISTA Y UN SPAN PARA GUARDAR EL NOMBRE DE LA TAREA
        let li = document.createElement("li");
        let span = document.createElement("span");
        span.textContent = tareaAgregada;
        li.appendChild(span);
        listaOrdenada.appendChild(li);

        // AGREGO LA CLASE IMPORTANTE SI EL USUSARIO LA PIDE
        if (checkbox.checked) {
            li.classList.add("importante");
            contadorTareasImportantes();
        };

        // CONTENEDOR DE BOTONES
        let contenedorBotones = document.createElement("div");
        // BOTON IMPORTANTE
        const botonImportante = document.createElement("button");
        botonImportante.textContent = "Importante";
        botonImportante.style.backgroundColor = "gold";
        botonImportante.addEventListener("click", () => {
            li.classList.toggle("importante");
            contadorTareasImportantes();
        });

        // BOTON MODIFICAR
        const botonModificar = document.createElement("button");
        botonModificar.textContent = "Modificar";
        botonModificar.style.backgroundColor = "lightblue";
        botonModificar.addEventListener("click", () => {

            inputModificar.parentElement.classList.remove("ocultar");
            inputModificar.value = span.textContent;
            listaOrdenada.classList.add("ocultar");
            let textoInput;
            inputModificar.addEventListener("input", (e) => {
                textoInput = e.target.value.trim();
            })
            botonGuardarModificacion.addEventListener("click", () => {
                if (textoInput != "" && textoInput != null) {
                    span.textContent = textoInput;
                    inputModificar.parentElement.classList.add("ocultar");
                    listaOrdenada.classList.remove("ocultar");
                }
            })

        });
        // BOTON ELIMINAR
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.style.backgroundColor = "lightblue";
        botonEliminar.addEventListener("click", () => {
            listaOrdenada.removeChild(li);
            contadorTareasTotales();
            contadorTareasImportantes();
        });

        contenedorBotones.appendChild(botonModificar);
        contenedorBotones.appendChild(botonImportante);
        contenedorBotones.appendChild(botonEliminar);
        li.appendChild(contenedorBotones);
    }
    inputTarea.value = "";
    tareaAgregada = "";
    checkbox.checked = false;
    contadorTareasTotales()
}
function guardarTarea(evento) {
    tareaAgregada = evento.target.value.trim();
}
function buscarTarea(evento) {
    let buscarTarea = evento.target.value.trim().toLowerCase();

    if (listaOrdenada.children.length > 0) {
        let tareas = document.querySelectorAll("ol span");

        tareas.forEach(tarea => {
            let texto = tarea.textContent.toLowerCase();

            if (texto.includes(buscarTarea)) {
                tarea.parentElement.classList.remove("ocultar");
            } else {
                tarea.parentElement.classList.add("ocultar");
            }
        });
    }
}
function agregarTareaEnter(evento) {
    if (evento.key === "Enter") {
        agregarTarea();
    }
}
function contadorTareasImportantes() {
    spanTareasImportantes.textContent = document.querySelectorAll(".importante").length;
}
function contadorTareasTotales() {
    spanTareasTotales.textContent = document.querySelectorAll("li").length;
}

// SELECCIONO LOS ELEMENTOS PRINCIPALES
const inputTarea = document.querySelector("input#tarea");
const checkbox = document.querySelector("input#checkbox");
const inputBuscador = document.querySelector("input#buscador");
const botonAgregar = document.querySelector("button#agregarTarea");
const listaOrdenada = document.querySelector("ol");
const spanTareasTotales = document.querySelector("#total span");
const spanTareasImportantes = document.querySelector("#importante span");
const inputModificar = document.querySelector("div.ocultar input");
const botonGuardarModificacion = document.querySelector("div.ocultar button");

// VARIABLE DONDE DEPOSITO LA TAREA ESCRITA
let tareaAgregada;

// AGREGO LAS FUNCIONES A LOS ELEMENTOS
inputTarea.addEventListener("input", guardarTarea);
botonAgregar.addEventListener("click", agregarTarea);
inputBuscador.addEventListener("input", buscarTarea);
document.addEventListener("keydown", agregarTareaEnter);