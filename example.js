
function cambiarContenido(){
    /*var tabla = document.getElementById("tablaDeEjemplo");
    tabla.getElementsByTagName('tr')[0].getElementsByTagName('td')[1].innerHTML="HOLA";*/

    var fila = prompt("Introduce la fila");
    var columna = prompt("Introduce la columna");
    var contenido = prompt("Introduce el contenido");

    var table = document.getElementById("tablaDeEjemplo");

    if(fila==0 && columna==0){
        table.rows[fila].cells[columna].innerHTML = contenido;
    }else if(fila==0 && columna==1){
        table.rows[fila].cells[columna].innerHTML = contenido;
    }else if(fila==1 && columna==0){
        table.rows[fila].cells[columna].innerHTML = contenido;
    }else if(fila==1 && columna==1){
        table.rows[fila].cells[columna].innerHTML = contenido;
    }else if(fila==2 && columna==0){
        table.rows[fila].cells[columna].innerHTML = contenido;
    }else if(fila==2 && columna==1){
        table.rows[fila].cells[columna].innerHTML = contenido;
    }
}
