import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface TODO {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(response => {
    const todo = response.data as TODO;

    const ID = todo.id;
    const title = todo.title;
    const finished = todo.completed;

    console.log(`
        id: ${ID}
        title: ${title}
        finished: ${finished}
    `);

});
