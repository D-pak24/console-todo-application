let input = prompt('what do you like to do ?');
let todos = ['first list ', 'second list'];
while (input !== 'quit') {
    if (input === 'list') {
        console.log('##############');
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('##############');
    } else if (input == 'add') {
        let newTodo = prompt("what do you want to add in a list");
        todos.push(newTodo);
        console.log(`Succesfully Added a ${newTodo}`);
    } else if (input === 'delete') {
        let index = prompt("enter a list index to delete the specific list");
        todos.splice(index, 1);
        console.log('succesfuly deleted the list');
    }
    input = prompt('what do you like to do ?');
}
console.log('---You Quited The Application---');