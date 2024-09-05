let txtbxNombre = document.getElementById("txtbxNombre");
let txtbxApellido = document.getElementById("txtbxApellido");
let txtbxMatricula = document.getElementById("txtbxMatricula");
let txtbxCalificacion = document.getElementById("txtbxCalificacion");
let txtResultado = document.getElementById("txtResultado");
let btnRegistrarEstudiante = document.getElementById("btnRegistrarEstudiante");
let btnCalcularPromedio = document.getElementById("bntCalcularPromedio");
let btnLimpiarFormulario = document.getElementById("btnLimpiarFormulario");
let tablaListadoEstudiantes = document.querySelector("tbody");

let listadoEstudiantes = [];

let promedioTotal = 0;

class Estudiante {
  constructor(nombre, apellido, matricula, nota) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.matricula = matricula;
    this.nota = nota;
  }
}

const calcularPromedio = (listado = []) => {
  let totalNotas = 0;
  if (listado.length == 0) {
    promedioTotal = 0;
    txtResultado.innerText = promedioTotal;
  } else {
    listado.forEach((estudiante) => {
      totalNotas += parseInt(estudiante.nota);
    });
    promedioTotal = Math.floor(totalNotas / listado.length);
    txtResultado.innerText = promedioTotal;
  }
};

const limpiarFormulario = () => {
  txtbxNombre.value = "";
  txtbxApellido.value = "";
  txtbxMatricula.value = "";
  txtbxCalificacion.value = "";
};

const crearEstudiante = (nombre, apellido, matricula, nota) => {
  let estudiante = new Estudiante(nombre, apellido, matricula, nota);
  listadoEstudiantes.push(estudiante);
  localStorage.setItem(
    "listadoEstudiantes",
    JSON.stringify(listadoEstudiantes)
  );
  return estudiante;
};

const mostrarEstudiante = (estudiante) => {
  if (typeof estudiante === "object") {
    let tdNombre = document.createElement("td");
    let tdApellido = document.createElement("td");
    let tdMatricula = document.createElement("td");
    let tdNota = document.createElement("td");
    let tdModificar = document.createElement("td");
    let tdEliminar = document.createElement("td");
    let trEstudiante = document.createElement("tr");
    trEstudiante.setAttribute("class", "filaEstudiante");

    // Botones, estilo de botones y eventos de botones
    let btnModificar = document.createElement("button");
    let btnEliminar = document.createElement("button");
    btnModificar.className = "btnModificar";
    btnModificar.setAttribute("type", "button");
    btnEliminar.className = "btnEliminar";
    btnEliminar.setAttribute("type", "button");

    const tableCells = [tdNombre, tdApellido, tdMatricula, tdNota];

    tableCells.forEach((cell) => {
      cell.addEventListener("click", () => {
        txtbxNombre.value = estudiante.nombre;
        txtbxApellido.value = estudiante.apellido;
        txtbxMatricula.value = estudiante.matricula;
        txtbxCalificacion.value = estudiante.nota;
      });
    });

    btnModificar.addEventListener("click", (e) => {
      let estudianteNombre = estudiante.nombre;
      const modificado = (estudiante) => estudiante.nombre === estudianteNombre;
      let estudianteIndice = listadoEstudiantes.findIndex(modificado);

      let seleccionado = listadoEstudiantes[estudianteIndice];

      seleccionado.nombre = txtbxNombre.value;
      seleccionado.apellido = txtbxApellido.value;
      seleccionado.matricula = txtbxMatricula.value;
      seleccionado.nota = txtbxCalificacion.value;

      listadoEstudiantes.splice(estudianteIndice, 1, seleccionado);
      localStorage.setItem(
        "listadoEstudiantes",
        JSON.stringify(listadoEstudiantes)
      );
      tablaListadoEstudiantes.innerHTML = ""; // Limpiar la tabla
      listadoEstudiantes.forEach(mostrarEstudiante);
      calcularPromedio(listadoEstudiantes);
      limpiarFormulario();
    });

    btnEliminar.addEventListener("click", (e) => {
      let estudianteNombre = estudiante.nombre;
      const modificado = (estudiante) => estudiante.nombre === estudianteNombre;
      let estudianteIndice = listadoEstudiantes.findIndex(modificado);

      listadoEstudiantes.splice(estudianteIndice, 1);

      localStorage.setItem(
        "listadoEstudiantes",
        JSON.stringify(listadoEstudiantes)
      );
      tablaListadoEstudiantes.innerHTML = "";
      listadoEstudiantes.forEach(mostrarEstudiante);
      limpiarFormulario();
      calcularPromedio(listadoEstudiantes);
    });
    // fin de botones, estilos y eventos de botones

    tdNombre.appendChild(document.createTextNode(estudiante.nombre));
    tdApellido.appendChild(document.createTextNode(estudiante.apellido));
    tdMatricula.appendChild(document.createTextNode(estudiante.matricula));
    tdNota.appendChild(document.createTextNode(estudiante.nota));
    tdModificar.appendChild(btnModificar);
    tdEliminar.appendChild(btnEliminar);

    trEstudiante.appendChild(tdNombre);
    trEstudiante.appendChild(tdApellido);
    trEstudiante.appendChild(tdMatricula);
    trEstudiante.appendChild(tdNota);
    trEstudiante.appendChild(tdModificar);
    trEstudiante.appendChild(tdEliminar);

    tablaListadoEstudiantes.appendChild(trEstudiante);
  }
};

btnRegistrarEstudiante.addEventListener("click", (e) => {
  let nuevoEstudiante = crearEstudiante(
    txtbxNombre.value,
    txtbxApellido.value,
    txtbxMatricula.value,
    txtbxCalificacion.value
  );
  mostrarEstudiante(nuevoEstudiante);
  calcularPromedio(listadoEstudiantes);
  limpiarFormulario();
});

btnCalcularPromedio.addEventListener("click", (e) => {
  calcularPromedio(listadoEstudiantes);
});

btnLimpiarFormulario.addEventListener("click", (e) => {
  limpiarFormulario();
});

if (!localStorage.hasOwnProperty("listadoEstudiantes")) {
  localStorage.setItem(
    "listadoEstudiantes",
    JSON.stringify(listadoEstudiantes)
  );
  listadoEstudiantes.forEach(mostrarEstudiante);
  calcularPromedio(listadoEstudiantes);
} else {
  listadoEstudiantes = JSON.parse(localStorage.getItem("listadoEstudiantes"));
  listadoEstudiantes.forEach(mostrarEstudiante);
  calcularPromedio(listadoEstudiantes);
}
