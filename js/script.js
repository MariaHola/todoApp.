{

    let tasks = [];
    let hideDoneTasks = false;

    const removeTask = (taskIndex) => {
        tasks = [
            ...tasks.slice(0, taskIndex),
            ...tasks.slice(taskIndex + 1),
        ];
        render();
    };

    const toggleTaskDone = (taskIndex) => {
        tasks = [
            ...tasks.slice(0, taskIndex),
            {
                ...tasks[taskIndex],
                done: !tasks[taskIndex].done,
            },
            ...tasks.slice(taskIndex + 1),
        ];
        render();
    };

    const addNewTask = (newTaskContent) => {
        tasks = [
            ...tasks,
            { content: newTaskContent }
        ];
        render();
    };

    const bindRemoveEvents = () => {

        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, taskIndex) => {
        removeButton.addEventListener("click", () => {
            removeTask(taskIndex);
        });
        });
    };

    const bindToggleDonEvents = () => {
        const toggleDoneButtons = document.querySelectorAll(".js-done");
        
        toggleDoneButtons.forEach((toggleDoneButton, taskIndex) => {
        toggleDoneButton.addEventListener("click", () => {
            toggleTaskDone(taskIndex);
        });
        });
    };

    const renderTasks = () => {
        let tasksListHTMLContent = "";

        for(const task of tasks) {
            tasksListHTMLContent += `
            <li 
            class="tasks tasks__item js-task" ${task.done ? " style=\"text-decoration: line-through\"" : ""}>
            
            <button class="tasks tasks__button tasks__button--toggleDone js-toggleDone">
            ${task.done ? "✔" : ""}
            </button>

            <span class="tasks__content${ task.done ? " tasks__content--done" : ""}">${task.content}</span>
            <button class="tasks tasks__button--remove js-remove">🗑</button>
            </li>
            `;
        }

document.querySelector(".js-tasks").innerHTML = tasksListHTMLContent;
   
};

    const renderButtons = () => {};

    const bindButtonsEvents = () => {};

    const render = () => {
        renderTasks();
        renderButtons();
        bindRemoveEvents();
        bindToggleDonEvents();
        bindButtonsEvents();
    };

const onFormSubmit = (event) => {
    event.preventDefault();

    const newTaskElement = document.querySelector(".js-newTask");
    const newTaskContent = newTaskElement.value.trim();

    if (newTaskContent !== "") {
        addNewTask(newTaskContent);
        newTaskElement.value = "";
    }

    newTaskElement.focus();
};

    const init = () => {
        render();

        const form = document.querySelector(".js-form");
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const newTaskContent = document.querySelector(".js-newTask").value.trim();
            if(newTaskContent === "") {
                return;
            }
            tasks.push({
                content: newTaskContent,
            });

            render();
        });

    };

    init();
}