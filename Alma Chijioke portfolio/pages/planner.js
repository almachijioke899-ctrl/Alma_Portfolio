/* ==================================================
   ACADEMIC TASK PLANNER
   Author: Alma Chijioke Chaizokam
================================================== */

const plannerForm = document.getElementById("plannerForm");
const taskList = document.getElementById("taskList");
const searchInput = document.getElementById("search");

const totalTasks = document.getElementById("totalTasks");
const pendingTasks = document.getElementById("pendingTasks");
const completedTasks = document.getElementById("completedTasks");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let editIndex = null;

function saveTasks(){

localStorage.setItem("tasks", JSON.stringify(tasks));

}

function updateStats(){

const total = tasks.length;

const completed = tasks.filter(task => task.completed).length;

const pending = total - completed;

totalTasks.textContent = total;
completedTasks.textContent = completed;
pendingTasks.textContent = pending;

}

function displayTasks(filteredTasks = tasks){

taskList.innerHTML = "";

if(filteredTasks.length === 0){

taskList.innerHTML = `

<div class="empty-state">

<i class="fas fa-book"></i>

<h2>No Tasks Yet</h2>

<p>Add your first academic task to get started.</p>

</div>

`;

updateStats();

return;

}

filteredTasks.forEach((task,index)=>{

const card = document.createElement("div");

card.className = `task-card ${task.completed ? "completed" : ""}`;

card.innerHTML = `

<h3>${task.title}</h3>

<p><strong>Course:</strong> ${task.course}</p>

<p><strong>Due:</strong> ${task.date}</p>

<span class="priority ${task.priority.toLowerCase()}">

${task.priority}

</span>

<div class="task-actions">

<button class="complete-btn"
onclick="toggleComplete(${index})">

${task.completed ? "Undo" : "Complete"}

</button>

<button class="edit-btn"
onclick="editTask(${index})">

Edit

</button>

<button class="delete-btn"
onclick="deleteTask(${index})">

Delete

</button>

</div>

`;

taskList.appendChild(card);

});

updateStats();

saveTasks();

}

plannerForm.addEventListener("submit",(e)=>{

e.preventDefault();

const task = {

title:document.getElementById("taskTitle").value,

course:document.getElementById("courseCode").value,

date:document.getElementById("dueDate").value,

priority:document.getElementById("priority").value,

completed:false

};

if(editIndex === null){

tasks.push(task);

}

else{

task.completed = tasks[editIndex].completed;

tasks[editIndex] = task;

editIndex = null;

plannerForm.querySelector("button").innerHTML =

'<i class="fas fa-plus"></i> Add Task';

}

plannerForm.reset();

displayTasks();

});

/* ==========================================
   COMPLETE TASK
========================================== */

function toggleComplete(index){

tasks[index].completed = !tasks[index].completed;

displayTasks();

}

/* ==========================================
   EDIT TASK
========================================== */

function editTask(index){

const task = tasks[index];

document.getElementById("taskTitle").value = task.title;

document.getElementById("courseCode").value = task.course;

document.getElementById("dueDate").value = task.date;

document.getElementById("priority").value = task.priority;

editIndex = index;

plannerForm.querySelector("button").innerHTML =
'<i class="fas fa-pen"></i> Update Task';

window.scrollTo({

top:0,

behavior:"smooth"

});

}

/* ==========================================
   DELETE TASK
========================================== */

function deleteTask(index){

const confirmDelete = confirm(

"Are you sure you want to delete this task?"

);

if(confirmDelete){

tasks.splice(index,1);

displayTasks();

}

}

/* ==========================================
   SEARCH TASKS
========================================== */

searchInput.addEventListener("input",()=>{

const keyword = searchInput.value.toLowerCase();

const filtered = tasks.filter(task=>{

return (

task.title.toLowerCase().includes(keyword) ||

task.course.toLowerCase().includes(keyword)

);

});

displayTasks(filtered);

});

/* ==========================================
   FILTER BUTTONS
========================================== */

const filters = document.querySelectorAll(".filter");

filters.forEach(button=>{

button.addEventListener("click",()=>{

filters.forEach(btn=>btn.classList.remove("active"));

button.classList.add("active");

const type = button.dataset.filter;

let filtered = tasks;

if(type==="pending"){

filtered = tasks.filter(task=>!task.completed);

}

else if(type==="completed"){

filtered = tasks.filter(task=>task.completed);

}

displayTasks(filtered);

});

});

/* ==========================================
   INITIAL LOAD
========================================== */

displayTasks();