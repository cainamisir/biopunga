import logo from "./logo.svg";
import "./App.css";
import MainPage from "./Components/MainPage";
import Intrebari from "./Components/Intrebari";
import Credits from "./credits";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
    document.body.style = "background: white;";
    return (
        <Router>
            <Switch>
                <Route path="/intrebari">
                    <Intrebari />
                </Route>
                <Route path="/credits">
                    <Credits />
                </Route>
                <Route path="/">
                    <div className="App">
                        <MainPage />
                    </div>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
