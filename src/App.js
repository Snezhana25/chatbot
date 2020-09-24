import React, {useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import useStore from "./hooks/store"
import ListPage from './pages/ListPage';

function App() {
    const { state, actions } = useStore();

    console.log("state app", state);

    useEffect(() => {
       actions.getList();
    }, [actions]);

  return (
    <>
        <Navbar list={state.lists}/>
        <Switch>
            <Route path='/page1'  component={ListPage}/>
            <Route path='/page2'  component={ListPage}/>
        </Switch>
    </>
  );
}

export default App;
