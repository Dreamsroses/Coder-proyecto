// Bienvenida a las tareas con instrucciones
let showData = alert("Agrega una tarea \n 1.- Indica el nombre de tú tarea \n 2.- La fecha de entrega \n 3.- Confirma si la tarea y fecha de entrega es correcta");

// funcion de creación tarea con la fecha
const crearTask = function (newName, newTarea, newDate) {
    this.name = newName;
    this.tarea = newTarea;
    this.date = newDate;
}

// Array vacio con las tareas que se ingresaran en el prompt
let listaTareas = [];

// Aqui se ingresan la tarea y la fecha a de entrega
listaTareas.push(new crearTask(prompt("Agregue su Nombre: "), prompt("Agregue su Tarea: "), prompt("Agregue una fecha de Entrega ")));

// Alerta con un mensaje de la tarea y fecha ingresada anteriormente
alert(
    "Su Nombre es: " + listaTareas[0].name +
    " Su tarea es: " + listaTareas[0].tarea +
    " Con fecha de entrega en: " + listaTareas[0].date
)

// Log de Array
console.log(listaTareas);

// Mensaje que entrega la info de validación de la tarea/fecha con un si o no
var validandoTask = prompt("Confirme con 0 para Yes si la tarea y fecha de entrega son correctas, de lo contrario escriba 1 para No, y volver a crear");

for (let validador in validandoTask) {
    if (validandoTask[validador] == 0) {
        alert("Felicitaciones " + listaTareas[0].name + " Tarea ingresada correctamente");
    }
}

// Array que valida la tarea con si o no por el usuario
var dataConfirm = ["No", "Yes"];

// Recorrido que indica si es Si continue con las tareas
for (var i = 0; i < 2; i++) {

    if (i == 1) {
        continue;

    }

}

// Recorrido que indica cada confirmación, Si, NO o vacio de la tarea/Fecha
while (validandoTask != "0") {

    switch (validandoTask) {

        case "1":
            alert("Usted a indicado que: " + dataConfirm[0]);
            break;
        case "2":
            alert("Usted a confirmado: " + dataConfirm[1]);
            break;
        default:
            alert("Cree su tarea de forma correcta");
            break;
    }

    let listaTareas = [];


    // Aqui se vuelve a ingresar la tarea y la fecha a de entrega en caso de indicar No y otra cosa
    listaTareas.push(new crearTask(prompt("Agregue su Nombre: "), prompt("Agregue su Tarea: "), prompt("Agregue una fecha de Entrega ")));

    // Alerta con un mensaje de la tarea y fecha ingresada anteriormente
    alert(
        "Su Nombre es : " + listaTareas[0].name +
        " Su tarea es : " + listaTareas[0].tarea +
        " Con fecha de entrega en: " + listaTareas[0].date
    )
    // Log de objeto   
    console.log(listaTareas);

    // Mensaje que entrega la info de validación de la tarea/fecha con un si o no
    var validandoTask = prompt("Confirme con 0 para Yes si la tarea y fecha de entrega son correctas, de lo contrario escriba 1 para No, y volver a crear");

    alert("Felicitaciones " + listaTareas[0].name + " Tarea ingresada correctamente");

}

// Guardar datos en la sesion
const guardaLocal = (clave, valor) => {
    sessionStorage.setItem(clave, valor)
};

for (const listaTarea of listaTareas) {
    guardaLocal(listaTarea.name, JSON.stringify(listaTarea));
}

// Capturando datos de prompt Name, Tarea y Date
let padre = document.getElementById("contenidoGenerado");


for (const valida of validandoTask) {
    let contenedor = document.createElement("p");
    let inner = "";

    contenedor.innerHTML = `
    <div class="content">
            <div class="header">
            Nombre creador: ${listaTareas[0].name}
            </div>
            <div class="meta">
            Su fecha de entrega es: ${listaTareas[0].date}
            </div>
            <div class="description">
            Su tarea es: ${listaTareas[0].tarea}
            </div>
            </div>
            <div class="extra content">
            <div class="ui two buttons">
                <div class="ui basic green button">Finalizar</div>
                <div class="ui basic red button btn2">Borrar</div>
            </div>
            </div>`;
    padre.appendChild(contenedor);
}


function guardarTarea() {
    let nuevoRegistro = {
        // id: tasks.length + 1,
        name: document.getElementById("creatask").value,
        tarea: document.getElementById("titletask").value,
        date: document.getElementById("datetask").value
    }
    listaTareas.push(new crearTask(nuevoRegistro));
    generarSalida(listaTareas);
    body.innerHTML = inner;

}

document.getElementById("btnSave").onclick = guardarTarea;


  

// function myFunction() {
//     let contenedorTareas = document.getElementById("task").parentElement;
//     document.getElementById("demo").innerHTML = contenedorTareas;
//     console.log(contenedorTareas);
// }