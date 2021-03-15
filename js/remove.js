$(document).ready(function() {
    var valorD = 0;
    
    // Crear un elemento div añadiendo estilos CSS
    var container = $(document.createElement(‘div’)).css({
    padding: ‘5px’, margin: ’20px’, width: ‘170px’, border: ‘1px dashed’,
    borderTopColor: ‘#999’, borderBottomColor: ‘#999’,
    borderLeftColor: ‘#999’, borderRightColor: ‘#999’
    });
    
    $(‘#btAdd’).click(function() {
    if (valorD <= 19) {
    
    valorD = valorD + 1;
    
    // Añadir caja de texto.
    $(container).append(‘<input type=text class="input" id=tb’ + valorD + ‘ ‘ +
    ‘value="Elemento de Texto ‘ + valorD + ‘" />’);
    
    if (valorD == 1) {
    
    var divSubmit = $(document.createElement(‘div’));
    $(divSubmit).append(‘<input type=button class="bt" onclick="GetTextValue()"’ +
    ‘id=btSubmit value=Enviar />’);
    
    }
    
    $(‘#main’).after(container, divSubmit);
    }
    else { //se establece un limite para añadir elementos, 20 es el limite
    
    $(container).append(‘<label>Limite Alcanzado</label>’);
    $(‘#btAdd’).attr(‘class’, ‘bt-disable’);
    $(‘#btAdd’).attr(‘disabled’, ‘disabled’);
    
    }
    });
    
    $(‘#btRemove’).click(function() { // Elimina un elemento por click
    if (valorD != 0) { $(‘#tb’ + valorD).remove(); valorD = valorD – 1; }
    
    if (valorD == 0) { $(container).empty();
    
    $(container).remove();
    $(‘#btSubmit’).remove();
    $(‘#btAdd’).removeAttr(‘disabled’);
    $(‘#btAdd’).attr(‘class’, ‘bt’)
    
    }
    });
    
    $(‘#btRemoveAll’).click(function() { // Elimina todos los elementos del contenedor
    
    $(container).empty();
    $(container).remove();
    $(‘#btSubmit’).remove(); valorD = 0;
    $(‘#btAdd’).removeAttr(‘disabled’);
    $(‘#btAdd’).attr(‘class’, ‘bt’);
    
    });
    });
    
    // Obtiene los valores de los textbox al dar click en el boton "Enviar"
    var divValue, values = ”;
    
    function GetTextValue() {
    
    $(divValue).empty();
    $(divValue).remove(); values = ”;
    
    $(‘.input’).each(function() {
    divValue = $(document.createElement(‘div’)).css({
    padding:’5px’, width:’200px’
    });
    values += this.value + ‘<br />’
    });
    
    $(divValue).append(‘<p><b>Tus valores añadidos</b></p>’ + values);
    $(‘body’).append(divValue);