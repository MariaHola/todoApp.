{

    const tasks = [
        {
            content: "abcde",
            done: false,
        },
        {
            content: "fghij",
            done: true,
        },
    ];

    const removeTask = (taskIndex) => {
        tasks.splice(taskIndex, 1);
        render();
    }

    const toggleTaskDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render();
    }

    const bindEvents = () => {

        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, index) => {
        removeButton.addEventListener("click", () => {
            removeTask(index);
        });
        });
        
        const toggleDoneButtons = document.querySelectorAll(".js-done");
        
        toggleDoneButtons.forEach((toggleDoneButton, index) => {
        toggleDoneButton.addEventListener("click", () => {
            toggleTaskDone(index);
        });
        });
    }
    
    const render = () => {
        let htmlString = "";

        for(const task of tasks) {
            htmlString += `
            <li${task.done ? " style=\"text-decoration: line-through\"" : ""}>
            <button class="js-done">✔</button>
            <button class="js-remove">🗑</button>
            ${task.content}
            </li>
            `;
        }

document.querySelector(".js-tasks").innerHTML = htmlString;

bindEvents();

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