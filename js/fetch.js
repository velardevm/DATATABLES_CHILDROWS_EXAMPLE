//const tabla = document.querySelector('#lista-usuarios tbody');
const tablaProductos = document.querySelector('#lista-productos tbody');
const tabla = document.querySelector('#example tbody');

function cargarUsuarios(){
    fetch('usuarios.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios  => {
            usuarios.forEach(usuario => {
               // const row = document.createElement('tr');
                tabla.innerHTML += `
                    <tr>
                    <td>${usuario.respuestaCT.pedidoWeb}</td>
                    <td>${usuario.respuestaCT.fecha}</td>
                    <td>${usuario.respuestaCT.factura}</td>
                    <td>${usuario.respuestaCT.formaPago}</td>
                    <td>${usuario.respuestaCT.metodoEnvio}</td>
                    <td>${usuario.respuestaCT.estatus}</td>
                    <td><button id='${usuario.respuestaCT.pedidoWeb}' class="producto" onclick="mostrarProductos(this.id)">Vér productos</button></td>
                    </tr>
                `;
               // tabla.appendChild(row);  
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarUsuarios();