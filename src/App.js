import React from "react";
import './scss/app.scss';
import {Header, Home, Cart} from "./Components";
import {Route, Switch, Redirect } from "react-router-dom"

function App() {

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Switch>
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/cart" component={Cart}/>
                    <Redirect from="/" to="/home"  />
                </Switch>
            </div>
        </div>

    );
}

export default App;
