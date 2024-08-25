let tareas = [
  { id: 1, nombre: "Preparar informe ejecutivo", estado: false },
  { id: 2, nombre: "Limpieza de dominios", estado: false },
  { id: 3, nombre: "Resolver tickets", estado: false },
];

const taskList = document.querySelector("#taskList");
const newTaskInput = document.querySelector("#newTaskInput");
const countOfTasks = document.querySelector("#countOfTasks");
const finishedTasks = document.querySelector("#finishedTasks");
const addTaskBtn = document.querySelector("#addTaskBtn");
let idContador = 3;

function actualizarContadores() {
  const completedTasksCount = tareas.filter((tarea) => tarea.estado).length;
  countOfTasks.textContent = `Total: ${tareas.length}`;
  finishedTasks.textContent = `Realizadas: ${completedTasksCount}`;
}

function renderTareas() {
  actualizarContadores();
  taskList.innerHTML = tareas
    .map(
      (tarea) => `
      <tr id="tarea-${tarea.id}">
        <td>${tarea.id}</td>
        <td style="word-break: break-word">${tarea.nombre}</td>
        <td>
          <input type="checkbox" ${tarea.estado ? "checked" : ""} class="checkbox-estado" data-id="${tarea.id}" style="height: 1rem; padding-right: 1rem;">
        </td>
        <td>
          <button class="btn-borrar" data-id="${tarea.id}">❌</button>
        </td>
      </tr>
    `
    )
    .join("");

  document.querySelectorAll('.checkbox-estado').forEach(el => {
    el.addEventListener('click', (e) => cambioEstado(Number(e.target.dataset.id)));
  });

  document.querySelectorAll('.btn-borrar').forEach(el => {
    el.addEventListener('click', (e) => borrar(Number(e.target.dataset.id)));
  });
}

function borrar(id) {
  tareas = tareas.filter((tarea) => tarea.id !== id);
  renderTareas();
}

function cambioEstado(id) {
  const tarea = tareas.find((ele) => ele.id === id);
  tarea.estado = !tarea.estado;
  actualizarContadores();
  pintarEstado(tarea);
}

function pintarEstado(tarea) {
  const fila = document.getElementById(`tarea-${tarea.id}`);

  if (tarea.estado) {
    fila.style.backgroundColor = "lightgreen";
  } else {
    fila.style.backgroundColor = "";
  }
}

renderTareas();

addTaskBtn.addEventListener("click", () => {
  const nuevaTarea = newTaskInput.value.trim();
  if (nuevaTarea === "") {
    alert("Campo tarea vacio. Indicar nueva tarea.");
  } else {
    idContador += 1;
    tareas.push({ id: idContador, nombre: nuevaTarea, estado: false });
    newTaskInput.value = "";
    renderTareas();
  }
});
