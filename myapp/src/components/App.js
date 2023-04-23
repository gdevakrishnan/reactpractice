import { Component } from "react"

class App extends Component {
    render() {
        let myFunction = (Name, event) => {
            alert (Name + event.type);
        }

        return (
            <button onClick={ (event) => myFunction("Deva Krishnan", event) }>button</button>
        )
    }
}

export default App;