const addButton = document.getElementById('addTask');
const taskInput = document.getElementById('tuskInput');
const allDoneButton = document.querySelectorAll('div.done_button');


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


};

const doneButtons = () => {
    
}
for (let i = 0; i < allDoneButton.length; i++) {
    allDoneButton[i].addEventListener('click', () => {
        console.log('clock');
    })
};



