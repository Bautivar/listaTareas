'use strict'
// SELECCIONO LOS ELEMENTOS PRINCIPALES
const inputTarea = document.querySelector("input#tarea");
const checkbox = document.querySelector("input#checkbox");
const inputBuscador = document.querySelector("input#buscador");
const botonAgregar = document.querySelector("button#agregarTarea");
const listaOrdenada = document.querySelector("ol");

// HACER LAS FUNCIONES POR SEPARADO Y LUEGO AGRGARLAS. DE ESTA MANERA SE PUEDE AGREGAR BOTONES CON ENTER
// LOS EVENTOS PUEDEN TENER MAS EVENTOS DENTRO. Agrgar tareas crea los botones pero esos botones les tengo que dar un valor predeterminado que sea el correspondiente en cada caso. Asi se opera mas facil. Para los botones usar el target que especifica si se presionaron.
// BAUTI, LA FUNCION QUE SE HACE CON EL BOTON AGREGAR, DECLARARLA AFUERA ASI LA PODES USAR CUANDO PRSIONES ENTER, PORQ SON FUNCIONES. KPO
function agregarTarea() {
    if (tareaAgregada.trim() != "") {
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
    }
    inputTarea.value = "";
    tareaAgregada = "";
    checkbox.checked = false;
}

let tareaAgregada;
inputTarea.addEventListener("input",e =>tareaAgregada = e.target.value);

// Agregar tareas con el boton agregar
botonAgregar.addEventListener("click",agregarTarea);

// Agregar tareas con enter
document.addEventListener("keydown",e =>{
    if (e.key === "Enter") {
        agregarTarea();
    }
});

inputBuscador.addEventListener("input",(e) => {
    let tareas = Array.from(listaOrdenada.children);
    let spans = [];
    for (const tarea of tareas) {
        spans.push(tarea.firstElementChild);
    }
    let input = e.target.value;
    let posicion = 0;
    for (const letra of input) {
        for (const span of spans) {
            if (span.textContent[posicion] != letra) {
                span.style.display = "none";
            }
        }
        posicion++;
    }
    // if (listaOrdenada.children.length > 0) {
    //     let tareas = Array.from(listaOrdenada.children);
    //     let spans = [];
    //     for (const tarea of tareas) {
    //         spans.push(tarea.firstElementChild);
    //         for (const span of spans) {
    //                if (span.textContent === e.target.value) {
    //                     // O puedo primero sacar el valor del primer input (primera letra) que se agrega, luego un for con ese input
    //                     // for con numeros para comparar el valor de l input con las letras del texto
    //                } 
    //         }
    //     }
    // }
});