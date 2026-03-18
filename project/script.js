document.body.classList.add("light");


function toggleTheme() {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
}


function showMessage() {
    alert("Registered!");
}

function welcome() {
    alert("Welcome to JavaScript");
}


function checkForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (name == "" || email == "" || password == "") {
        alert("Fill all fields");
        return false;
    }

    alert("Registration successful");
    return false;
}


function addTask() {
    var input = document.getElementById("taskInput");

    if (input.value == "") return;

    var li = document.createElement("li");

    li.innerHTML = input.value + 
        " <button onclick='removeTask(this)'>❌</button>";

    document.getElementById("list").appendChild(li);

    saveTasks();
    input.value = "";
}

function removeTask(btn) {
    btn.parentElement.remove();
    saveTasks();
}


function saveTasks() {
    var list = document.getElementById("list").innerHTML;
    localStorage.setItem("tasks", list);
}

function loadTasks() {
    var tasks = localStorage.getItem("tasks");
    if (tasks) {
        document.getElementById("list").innerHTML = tasks;
    }
}

loadTasks();