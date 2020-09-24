import React, { useState } from 'react';

export default function SendMessages({ onSubmit }) {
    const [title, setTitle] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        onSubmit(title);
        setTitle('');
    }

    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <input type="text"
                   value={title}
                   onChange={setTitle}/>
        </form>
    );
}
