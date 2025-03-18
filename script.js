'use strict'
// SELECCIONO LOS ELEMENTOS PRINCIPALES
let inputTarea = document.querySelector("input#tarea");
let checkbox = document.querySelector("input#checkbox");
let botonAgregar = document.querySelector("button#agregarTarea");
let listaOrdenada = document.querySelector("ol");


// // LOS GUARDO EN UN DIV PARA LUEGO AGREGARLOS EN LAS TAREAS

let tareaAgregada;
inputTarea.addEventListener("input",e => {
    tareaAgregada = e.target.value;
});
botonAgregar.addEventListener("click",() =>{
    if (tareaAgregada.trim() != "") {
        let li = document.createElement("li");
        li.textContent = tareaAgregada;
        listaOrdenada.appendChild(li);  

        if (checkbox.checked) {
            li.classList.add("importante");
        }
        // Contenedor de botones
        let contenedorBotones = document.createElement("div");
        // BOTON IMPORTANTE
        const botonImportante = document.createElement("button");
        botonImportante.textContent = "Importante";
        botonImportante.style.backgroundColor = "gold";
        // BOTON MODIFICAR
        const botonModificar = document.createElement("button");
        botonModificar.textContent = "Modificar";
        botonModificar.style.backgroundColor = "lightblue";
        // BOTON ELIMINAR
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.style.backgroundColor = "lightblue";

        // Agrego los botones al contenedor y
        let arrayBotones = [botonModificar,botonImportante,botonEliminar];
        for (const boton of arrayBotones) {
            contenedorBotones.appendChild(boton);
        }
        li.appendChild(contenedorBotones);


    }
    inputTarea.value = "";
    tareaAgregada = "";
    checkbox.checked = false;
});
