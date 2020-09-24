import React, { useEffect, useState} from 'react';
import useStore from "../hooks/store"

import ListMessages from "../components/ListMessages"
import SendMessages from "../components/SendMessages"

export default function ListPage({match}) {
    const { state, actions } = useStore();
    const [message, setMessage] = useState([]);

    useEffect(() => {
        setMessage();
        actions.getList();
    }, [actions, match.path]);

    function handleSubmit(title) {
        actions.createTitle({
            title,
            id: list.id
        });
    }

    const list = state.lists.find(list => list.path === match.path);
    console.log("---list page", list);

    return (
        <>
            <ListMessages
                list={list}
                messages={state}
                match={match}
            />
            <SendMessages onSubmit={handleSubmit}/>
        </>
    );
}
