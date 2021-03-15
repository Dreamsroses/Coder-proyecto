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