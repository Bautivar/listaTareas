'use strict'
// DECLARO LAS FUNCIONES
function agregarTarea() {
    if (tareaAgregada != "") {
        // Creo una la lista y un span que guarda el nombre de la tarea
        let li = document.createElement("li");
        let span = document.createElement("span");
        span.textContent = tareaAgregada;
        li.appendChild(span);
        listaOrdenada.appendChild(li);  
        
        // Agrego clase importante si el ususario lo pide
        if (checkbox.checked) {
            li.classList.add("importante");
        }

        // Contenedor de botones
        let contenedorBotones = document.createElement("div");
        // BOTON IMPORTANTE
        const botonImportante = document.createElement("button");
        botonImportante.textContent = "Importante";
        botonImportante.style.backgroundColor = "gold";
        botonImportante.addEventListener("click",() =>{
                li.classList.toggle("importante");
        })
        // BOTON MODIFICAR
        const botonModificar = document.createElement("button");
        botonModificar.textContent = "Modificar";
        botonModificar.style.backgroundColor = "lightblue";
        botonModificar.addEventListener("click",() => {
            let texto = prompt("Cambie el valor del texto");
            if (texto.trim() != "" && texto != undefined) {
                span.textContent = texto;
            }
        })
        // BOTON ELIMINAR
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.style.backgroundColor = "lightblue";
        botonEliminar.addEventListener("click",() => {
                listaOrdenada.removeChild(li);
        })
        
        // Agrego los botones al contenedor y
        contenedorBotones.appendChild(botonModificar);
        contenedorBotones.appendChild(botonImportante);
        contenedorBotones.appendChild(botonEliminar);
        li.appendChild(contenedorBotones);
        // spanTareasTotales.textContent = 
    }
    inputTarea.value = "";
    tareaAgregada = "";
    checkbox.checked = false;
}
function guardarTarea(evento){
    tareaAgregada = evento.target.value.trim();
}
function buscarTarea(evento){
    let buscarTarea = evento.target.value.trim().toLowerCase(); 
    
        if (listaOrdenada.children.length > 0) {
            let tareas = document.querySelectorAll("ol span"); 
    
            tareas.forEach(tarea => {
                let texto = tarea.textContent.toLowerCase(); 
                
                if (texto.includes(buscarTarea)) {
                    tarea.parentElement.classList.remove("ocultarTarea");
                } else {
                    tarea.parentElement.classList.add("ocultarTarea");
                }
            });
        }
}
// SELECCIONO LOS ELEMENTOS PRINCIPALES
const inputTarea = document.querySelector("input#tarea");
const checkbox = document.querySelector("input#checkbox");
const inputBuscador = document.querySelector("input#buscador");
const botonAgregar = document.querySelector("button#agregarTarea");
const listaOrdenada = document.querySelector("ol");
const spanTareasTotales = document.querySelector("#total span");
const spanTareasImportantes = document.querySelector("#importante span");
// VARIABLE DONDE DEPOSITO LA TAREA ESCRITA
let tareaAgregada;

// AGREGO LAS FUNCIONES A LOS ELEMENTOS
inputTarea.addEventListener("input",guardarTarea);
botonAgregar.addEventListener("click",agregarTarea);
inputBuscador.addEventListener("input",buscarTarea);
// AGREGO LAS TAREAS CON ENTER
document.addEventListener("keydown",e =>{
    if (e.key === "Enter") {
        agregarTarea();
    }
});
// Para hacer el contador, debo agarrar las clases de los importantes pata el contador importante y los objetos de la listas para el contador de todos los items