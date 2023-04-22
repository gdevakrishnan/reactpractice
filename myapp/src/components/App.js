import { Component } from "react";
import Home from "./Hero";
import Nav from "./Nav"

class App extends Component {
    render() {
        return (
            <div className = "main">
                <Nav />
                <Home />
            </div>
        )
    }
}

export default App;