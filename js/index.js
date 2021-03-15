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


function generarSalida(validandoTask) {

    // Capturando datos Name, Tarea y Date, formateandose en un div
    let padre = document.getElementById("contenidoGenerado");
    let inner = "";

    for (const valida of validandoTask) {
        let contenedor = document.createElement("p");
        contenedor.innerHTML = inner += `        
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
        // padre.append(contenedor);



    }

    for (const deletecard of validandoTask) {

        $(document).ready(function () {

            // $("#btnEnd").on("click", function () {
            //     var nuevo_e = $("#taskbody")
            //     $("#contenidoBackup").append(nuevo_e);
            //     console.log(nuevo_e)
            // });

            $("div#contenidoGenerado").on("click", "div#btnEnd", function () {
                $(this).closest("div#taskbody.content").appendTo("div#contenidoBackup");

            });

            // Delete alert Bs
            // $("#btnBorrarOut").on("click", function () {
            //   $("#taskbody").remove();
            // });

            $("div#contenidoGenerado").on("click", "div#btnBorrarOut", function () {
                $(this).closest("div#taskbody.content").remove();
            });
        });

    }

    padre.innerHTML = inner;

}


// function que guarda el valor desde el id en el html
function guardarTarea() {
    let nuevoRegistro = {
        name: document.getElementById("creatask").value,
        tarea: document.getElementById("titletask").value,
        date: document.getElementById("datetask").value
    }

    listaTareas.push(new crearTask(nuevoRegistro));
    generarSalida(listaTareas);


    var datasalida = listaTareas.slice(-1);
    
    console.log(datasalida);

    let inner = "";

    // Guardar datos en la sesion
    const guardaLocal = (clave, valor) => {
        localStorage.setItem(clave, valor)
    };

    for (const listaTarea of listaTareas) {
        guardaLocal(listaTarea.name, JSON.stringify(listaTarea));
    }
    guardaLocal("listadoTask", JSON.stringify(listaTareas))

    nuevoRegistro.innerHTML = inner;

}
// Boton que guarda la tarea desde la function guardarTarea
document.getElementById("btnSave").onclick = guardarTarea;

console.log(listaTareas)

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


