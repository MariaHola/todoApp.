{

    const tasks = [];

    const removeTask = (taskIndex) => {
        tasks.splice(taskIndex, 1);
        render();
    }

    const toggleTaskDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render();
    }

    const addNewTask = (newTaskContent) => {
        task.push({ content: newTaskContent });
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

    const render = () => {
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

bindRemoveEvents();
bindToggleDonEvents();
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