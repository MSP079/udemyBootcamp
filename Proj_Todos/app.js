let input = prompt('What would you like to do?');

const tods = ['Collect Chicken Eggs', 'Clean Litter Box'];
while (input !== 'quit' && input != 'q') {
    if (input === 'list') {
        console.log('***********');
        for (let i = 0; i < tods.length; i++) {
            console.log(`${i}: ${tods[i]}`);
        }
        console.log('***********');
    } else if (input === 'new') {
        const newTodo = prompt('Ok, what is the new todo?');
        tods.push(newTodo);
        console.log(`${newTodo} added to the list`);
    } else if (input === 'delete') {
        const index = parseInt(prompt('Ok, enter the index to delete:'));
        if (!Number.isNaN(index)) {
            const deleted = tods.splice(index, 1);
            const input = prompt('What would you like to do?');
        } else {
            console.log('Unkown Index');
        }
    }

}
console.log('OK QUIT the APP!');