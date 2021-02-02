let showData = alert("Agrega una tarea \n 1.- Indica el nombre de tú tarea \n 2.- La fecha de entrega \n 3.- Confirma si la tarea y fecha de entrega es correcta");

function crearTask(task, date) {
    return task + date;
}

let miTarea = prompt("Ingrese una tarea");
let miFecha = prompt("Ingrese una fecha de Entrega");

alert("Su tarea es :" + miTarea + "\n" + "Con fecha de entrega en: " + miFecha);

var validandoTask = prompt("Confirme con 0 para Yes si la tarea y fecha de entrega son correctas, de lo contrario escriba 1 para No, y volver a crear");

var dataConfirm = ["No", "Yes"];


for (var i = 0; i < 2; i++) {

    if (i == 1) {
        continue;
    }
}

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

    let miTarea = prompt("Ingrese una tarea");
    let miFecha = prompt("Ingrese una fecha de Entrega");
    alert("Su tarea es :" + miTarea + "\n" + "Con fecha de entrega en: " + miFecha);

    var validandoTask = prompt("Confirme con 0 para Yes si la tarea y fecha de entrega son correctas, de lo contrario escriba 1 para No, y volver a crear");
}


alert("Tarea ingresada correctamente Felicitaciones");

