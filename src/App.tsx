import React from 'react';
import Router from "./components/General/Route/router";
import NavBar from "./components/General/NavBar/NavBar";
import {Panel} from "./components/General/Panel/Panel";
import {Header} from "./components/General/Header/Header";
import PageContextProvider from "./context/context";

function App() {

    return (
        <PageContextProvider>
            <Router/>
            <Panel/>
            <Header/>
            <NavBar/>
        </PageContextProvider>
    );
}

export default App;
