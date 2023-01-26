const moverASeccion = (seccion) => {
    document.getElementById(seccion).scrollIntoView();
}

const validarFormulario = () => {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let mail = document.getElementById("mail").value;
    let telefono = document.getElementById("telefono").value;
    let mensaje = document.getElementById("mensaje").value;
  
    if (nombre != "" && apellido != "" && mail != "" && telefono != "" && mensaje != "") {
      alert("Mensaje enviado");
    }
  }