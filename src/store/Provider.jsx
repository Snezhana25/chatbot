import React, { useReducer, useMemo } from 'react';

import StoreContext from '../context/store';
import { bindActions } from './utils';

export default function Provider({ initialState, reducer, actions, children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log("Provider-state", state);
    console.log("Provider-dispatch", dispatch);

    // the resulting object is remembered to avoid
    // being re-rendered in components
    const memoizedActions = useMemo(() => bindActions
    (actions, dispatch), [dispatch, actions]);

    //store state and actions
    const memoizedStore = useMemo(() => ({
        state,
        actions: memoizedActions
    }), [state, memoizedActions]);

    return (
        <StoreContext.Provider value={memoizedStore}>
            {children}
        </StoreContext.Provider>
    );
}
