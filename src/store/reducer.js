export default function reducer(state, action) {
    console.log("reducer state", state);
    console.log("reducer action", action);

    switch (action.type) {
        case 'GET_LISTS':
            return {
                ...state,
                lists: action.payload.lists
            };

        case 'GET_LIST_PATH':
            return {
                ...state,
                path: action.payload.path
            };

        case 'CREATE_DATA':
            return {
                ...state,
                text: state.lists.push(action.payload.title)
            };

        default:
            return state;
    }
}
