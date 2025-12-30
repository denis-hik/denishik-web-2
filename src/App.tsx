import React from 'react';
import Router from "./Components/General/Route/router";
import NavBar from "./Components/General/NavBar/NavBar";
import {Panel} from "./Components/General/Panel/Panel";
import {Header} from "./Components/General/Header/Header";

function App() {

    return (
        <>
            <Router/>
            <Panel/>
            <Header/>
            <NavBar/>
        </>
    );
}

export default App;
