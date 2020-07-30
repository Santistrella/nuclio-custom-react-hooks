import React from 'react';
import { Input, TaskItem, TaskList, Controls } from "./components";

const App = () => {
    const tasks = [
        { id: 1, title: 'do dishes', completed: false },
        { id: 2, title: 'buy groceries', completed: true },
        { id: 3, title: 'take a shower please', completed: false }
    ]

    return (
        <section>
            <h1>What do you want to do today?</h1>
            <Input />
            <TaskList>
                {tasks.map(({ id, title, completed }) => (
                    <TaskItem key={id} title={title} completed={completed} />
                ))}
            </TaskList>
            <Controls tasks={tasks} />
        </section>
    );
};

export default App;
