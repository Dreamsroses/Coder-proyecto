// Tour virtual del sitio
const intro = introJs();

intro.setOptions({

    steps: [{
            intro: "Bienvenido a TaskTime, tu web app de tareas, iniciemos el tour"
        },
        {
            element: "#creatask",
            intro: "Ingresa tu nombre"
        },
        {
            element: "#titletask",
            intro: "Agrega el nombre de la tarea"
        },
        {
            element: "#datetask",
            intro: "Indica la fecha en que finaliza la tarea"
        },
        {
            element: "#btnSave",
            intro: "Presione en Save para agregar la tarea y listo"
        }
    ]
})

document.querySelector(".start-tour").addEventListener("click", function () {
    intro.start();
})

intro.start();


// funcion de creación tarea
class crearTask {
    constructor(datos) {
        this.name = datos.name;
        this.tarea = datos.tarea;
        this.date = datos.date;
    }
}

// Array vacio con las tareas que se ingresaran
let listaTareas = [];

// Inicio vacio de tareas con un mensaje personalizado
if (listaTareas.length == 0) {
    contenidoGenerado.innerHTML = "No tienes tareas";
}

let padre = document.getElementById("contenidoGenerado");


// Funcion con template de la tarea
function generarSalida(validandoTask) {

    if (listaTareas.length) {

        // contador.innerHTML = listaTareas.length;
        for (valida of validandoTask) {

            let inner = "";
            // Capturando datos Name, Tarea y Date, formateandose en un div
            padre.innerHTML = inner += `               
                <div id="taskbody" class="content">  
                     <div class="header">
                        Nombre creador: ${valida.name}
                     </div>
                     <div class="meta">
                         Su fecha de entrega es: ${valida.date}
                     </div>
                     <div class="description">
                        Su tarea es: ${valida.tarea}
                     </div>
                    <div class="extra content">
                            <div class="ui two buttons">
                            <div id="btnEnd" class="ui basic green button">Finalizar</div>
                            <div id="btnBorrarOut" class="ui basic red button">Borrar</div>
                        </div>
                    </div>
                </div>
                `;
        }
    }
}


$(document).ready(function () {

   
    // Finalizar tarea
    $("div#contenidoGenerado").on("click", "div#btnEnd", function () {
        $(this).closest("div#taskbody.content").appendTo("div#contenidoBackup");
    });
    
    // Borrar tarea
    $("div#contenidoGenerado").on("click", "div#btnBorrarOut", function () {
        $(this).closest("div#taskbody.content").remove();
    });
});

// Boton que guarda la tarea desde la function guardarTarea
const btnAgregar = document.getElementById("btnSave");

btnAgregar.addEventListener('click', (e) => {

    let nuevoRegistro = {
        name: document.getElementById("creatask").value,
        tarea: document.getElementById("titletask").value,
        date: document.getElementById("datetask").value
    }

    listaTareas.push(nuevoRegistro);
    generarSalida(listaTareas);

    e.stopPropagation();

});


// Animacion en titulo
$(document).ready(function () {
    $('#title_tasktime').fadeIn(3000).removeClass('.hidden');
    $("#title_tasktime").css("display", "inline-block");
    $("#title_tasktime").css("font-size", "2.5rem");
});


// Ajax consumir Pokeapi Ditto
$(document).ready(function () {
    $("#ejecutar_post").click(function () {
        $.get("https://pokeapi.co/api/v2/pokemon/ditto", function (data, status) {
            alert("Bienvenido: " + data.name + "\nRegistro de Email: " + status);
        });
    });
});




// addEventListener
// input valor 0

// localStorage para pasar a un segundo html