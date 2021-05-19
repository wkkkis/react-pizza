import React from "react";
import './scss/app.scss';
import {Header, Home, Cart} from "./Components";
import {Route, Switch, Redirect } from "react-router-dom"
import {getPizzas} from "./redux/reducers/pizzas";
import {useDispatch} from "react-redux";

function App() {
    const dispatch = useDispatch();

    window.test = () => {
        dispatch(getPizzas())
    }

    React.useEffect(() => {
        dispatch(getPizzas())
    }, [])

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
