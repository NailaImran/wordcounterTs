import inquirer from "inquirer";
let myTodo = [];
async function createTodo(myTodo) {
    do {
        let ans = await inquirer.prompt({
            type: "list",
            message: "select the operation",
            name: "select",
            choices: ["add", "update", "view", "delete"]
        });
        if (ans.select == "add") {
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "add item",
                name: "todo",
            });
            myTodo.push(addTodo.todo);
            console.log(myTodo);
        }
        if (ans.select == "update") {
            let updateTodo = await inquirer.prompt({
                type: "list",
                message: "select item from update",
                name: "todo",
                choices: myTodo.map(item => item)
            });
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "add item",
                name: "todo",
            });
            let newTodos = myTodo.filter(val => val !== updateTodo.todo);
            myTodo = [...newTodos, addTodo.todo];
            console.log(myTodo);
        }
        if (ans.select == "view") {
            console.log(myTodo);
        }
        if (ans.select == "delete") {
            let deleteTodo = await inquirer.prompt({
                type: "list",
                message: "select item from update",
                name: "todo",
                choices: myTodo.map(item => item)
            });
            let newTodos = myTodo.filter(val => val !== deleteTodo.todo);
            myTodo = [...newTodos];
            console.log(myTodo);
        }
    } while (true);
}
createTodo(myTodo);
