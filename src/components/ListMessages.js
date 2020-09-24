import React from "react";

export default function ListMessages({messages, match}) {
    const user = messages.lists.map(user => user);
    const arr = [];

    console.log(match);

    user.forEach(n => {
        arr.push(n.title);
    });

    console.log(arr);

    const steps = [
        {
            id: "Greet",
            message: "Hello, Welcome to our shop",
            trigger: "Ask Name"
        },
        {
            id: "Ask Name",
            message: "Please type your name?",
            trigger: "Waiting user input for name"
        },
        {
            id: "Waiting user input for name",
            user: true,
            trigger: "Asking options to eat"
        },
        {
            id: "Asking options to eat",
            message: "Hi {previousValue}, Glad to know you !!",
            trigger: "Done"
        },
        {
            id: "Done",
            message: "Have a great day !!",
            end: true
        }
    ];

    return (
        <div key={user.id}>
            {arr}
        </div>
    );
}
