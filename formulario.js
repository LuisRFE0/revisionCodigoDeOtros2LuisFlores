const formulario = document.querySelector(".formulario");// cambie la referencia 
formulario.addEventListener('submit', validarFormulario); // opte por usar addEventlistener



function validarFormulario(e) {
  e.preventDefault();//corregi el preventDefault

  //Cambie la forma de obtencion de los datos
  const nombre = document.querySelector('#name').value;
  const edad = document.querySelector('#age').value;
  const nacionalidad = document.querySelector('#nationality').value;

  // const i = nacionalidad.selectedIndex;
  // nacionalidad = nacionalidad.options[i].value;


  console.log(nombre, edad)
  console.log(nacionalidad)

  //cambie los errores por alerts
  if (nombre.length == 0) {
    alert('Favor de llenar tu nombre');
  }

  if (edad < 18 || edad > 120) {
    alert('Debes se mayor de 17 y menor a 120 años');
  }

  if (nombre.length > 0 && (edad > 18 && edad < 120)) {
    agregarInvitado(nombre, edad, nacionalidad);
  }
}



// const botonBorrar = document.createElement("button")
// botonBorrar.textContent = "Eliminar invitado"
// botonBorrar.id = "boton-borrar"
// const corteLinea = document.createElement("br")
// document.body.appendChild(corteLinea)
// document.body.appendChild(botonBorrar);






//--------------------------------------------------
function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }


  //Modifique el orden de algunas cosas y agrupe por elemento
  const lista = document.querySelector(".lista-de-invitados");

  const elementoLista = document.createElement("div")
  elementoLista.classList.add("elemento-lista");

  const spanNombre = document.createElement("span");
  spanNombre.textContent = "Nombre: ";

  const inputNombre = document.createElement("input");
  inputNombre.value = nombre
  const espacio = document.createElement("br");


  //Borre unos elementos que se duplicaban





  //------------------------------------------

  //No me acuerdo que modifique aqui
  function crearElemento(descripcion, valor) {

    const spanNombre = document.createElement("span");
    spanNombre.textContent = descripcion + ": ";

    const inputNombre = document.createElement("input");
    inputNombre.value = valor;
    const espacio = document.createElement("br");


    elementoLista.appendChild(spanNombre)
    elementoLista.appendChild(inputNombre)
    elementoLista.appendChild(espacio)
  }


  lista.appendChild(elementoLista);


  crearElemento("Nombre", nombre);
  crearElemento("Edad", edad);
  crearElemento("Nacionalidad", nacionalidad);




  const botonBorrar = document.createElement("button")
  botonBorrar.textContent = "Eliminar invitado"
  botonBorrar.id = "boton-borrar"
  const corteLinea = document.createElement("br")


  elementoLista.appendChild(corteLinea)
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function () {
    // this.parentNode.style.display = 'none';
    botonBorrar.parentNode.remove()
  }
}