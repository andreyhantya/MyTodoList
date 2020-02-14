const addButton = document.getElementById('addTask');
const taskInput = document.getElementById('tuskInput');



const taskList = {
    newTask: [],
    doneTask: [],
};

const addTask = () => {
    const ol = document.getElementById('todoList');
    let icons = '<div class="done_button"></div><div class="delete_button"></div>';
    ol.insertAdjacentHTML("afterbegin", `<li>${taskInput.value}${icons}</li>`);
    taskList.newTask.push(taskInput.value);
    console.log(taskInput.value);
    doneButtons();
    deleteButtons();
};

const doneButtons = () => {
    const allDoneButton = document.querySelectorAll('div.done_button');
    for (let i = 0; i < allDoneButton.length; i++) {
        allDoneButton[i].addEventListener('click', (event) => {

            event.path[1].classList.add('done');
        })
    }
};
const deleteButtons = () => {
    const allDeleteButton = document.querySelectorAll('div.delete_button');
    for (let i = 0; i < allDeleteButton.length; i++) {
        allDeleteButton[i].addEventListener('click', (event) => {
        console.log('delete');
            event.path[1].remove();
        })
    }
};




