# Registro de Calificaciones

> Una aplicación web para registrar y gestionar calificaciones de estudiantes

## Tabla de Contenidos

- [Introducción](#introducción)
- [Características](#características)
- [Instalación](#instalación)
- [Uso](#uso)
- [API](#api)
- [Eventos](#eventos)
- [Agradecimientos](#agradecimientos)
- [Licencia](#licencia)

## Introducción

Registro de Calificaciones es una aplicación web que permite a los usuarios registrar y gestionar las calificaciones de los estudiantes. La aplicación está construida utilizando HTML, CSS y JavaScript.

## Características

- Registro de estudiantes con nombre, apellido, matrícula y calificación
- Listado de estudiantes en una tabla
- Cálculo del promedio de calificaciones del grupo
- Almacenamiento de datos en localStorage para persistencia entre sesiones
- Interfaz de usuario intuitiva y fácil de usar

## Instalación

1. Clona el repositorio en tu máquina local
2. Abre el archivo `index.html` en tu navegador web

## Uso

1. Ingresa los datos del estudiante en el formulario
2. Haz clic en el botón "Registrar Estudiante" para agregar el estudiante a la lista
3. Para modificar los datos de un estudiante, haz clic en la fila correspondiente en la tabla
4. Para eliminar un estudiante, haz clic en el botón "Eliminar" en la fila correspondiente
5. Para calcular el promedio de calificaciones del grupo, haz clic en el botón "Calcular Promedio"
6. Para limpiar el formulario, haz clic en el botón "Limpiar Formulario"

## API

### `crearEstudiante(nombre, apellido, matricula, nota)`

Crea un nuevo objeto `Estudiante` con los datos proporcionados y lo agrega a la lista de estudiantes.

- `nombre` (string): El nombre del estudiante
- `apellido` (string): El apellido del estudiante
- `matricula` (string): La matrícula del estudiante
- `nota` (number): La calificación del estudiante

### `mostrarEstudiante(estudiante)`

Agrega un estudiante a la tabla de estudiantes en la interfaz de usuario.

- `estudiante` (Estudiante): El objeto `Estudiante` a agregar

### `calcularPromedio(listado = [])`

Calcula el promedio de las calificaciones de los estudiantes en la lista proporcionada y lo muestra en la interfaz de usuario.

- `listado` (Array): La lista de estudiantes (opcional)

### `limpiarFormulario()`

Limpia los campos del formulario de estudiante.

## Eventos

### `btnRegistrarEstudiante.addEventListener('click', ...)`

Se dispara cuando se hace clic en el botón "Registrar Estudiante". Crea un nuevo estudiante con los datos del formulario y lo agrega a la lista de estudiantes.

### `btnCalcularPromedio.addEventListener('click', ...)`

Se dispara cuando se hace clic en el botón "Calcular Promedio". Calcula el promedio de las calificaciones de los estudiantes en la lista y lo muestra en la interfaz de usuario.

### `btnLimpiarFormulario.addEventListener('click', ...)`

Se dispara cuando se hace clic en el botón "Limpiar Formulario". Limpia los campos del formulario de estudiante.

## Agradecimientos

Agradecemos al Prof. Luis Soto de Talendig por sus aclaraciones y sugerencias que ayudaron en el desarrollo de este proyecto.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT.
