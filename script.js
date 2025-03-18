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
let vacio = false;
document.addEventListener("keydown", e =>{
    if (e.key === "Enter" && tareaAgregada.trim() != "") {
       vacio = true;
    }
});
// HACER LAS FUNCIONES POR SEPARADO Y LUEGO AGRGARLAS. DE ESTA MANERA SE PUEDE AGREGAR BOTONES CON ENTER
// LOS EVENTOS PUEDEN TENER MAS EVENTOS DENTRO. Agrgar tareas crea los botones pero esos botones les tengo que dar un valor predeterminado que sea el correspondiente en cada caso. Asi se opera mas facil. Para los botones usar el target que especifica si se presionaron.
// BAUTI, LA FUNCION QUE SE HACE CON EL BOTON AGREGAR, DECLARARLA AFUERA ASI LA PODES USAR CUANDO PRSIONES ENTER, PORQ SON FUNCIONES. KPO
botonAgregar.addEventListener("click",(e) =>{
    if (tareaAgregada.trim() != "" ) {
        let li = document.createElement("li");
        li.textContent = tareaAgregada;
        listaOrdenada.appendChild(li);  

        if (checkbox.checked) {
            li.classList.add("tareaImportante");
        }
        // Contenedor de botones
        let contenedorBotones = document.createElement("div");
        // BOTON IMPORTANTE
        const botonImportante = document.createElement("button");
        botonImportante.classList.add("importante");
        botonImportante.textContent = "Importante";
        botonImportante.style.backgroundColor = "gold";
        // BOTON MODIFICAR
        const botonModificar = document.createElement("button");
        botonModificar.classList.add("modificar");
        botonModificar.textContent = "Modificar";
        botonModificar.style.backgroundColor = "lightblue";
        // BOTON ELIMINAR
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.classList.add("eliminar");
        botonEliminar.style.backgroundColor = "lightblue";

        // Agrego los botones al contenedor y
        contenedorBotones.appendChild(botonModificar);
        contenedorBotones.appendChild(botonImportante);
        contenedorBotones.appendChild(botonEliminar);
        li.appendChild(contenedorBotones);
    }
    inputTarea.value = "";
    tareaAgregada = "";
    checkbox.checked = false;
});

let botonEli = document.querySelector("button.eliminar");
botonEli.addEventListener("click",(e)=>{

});
