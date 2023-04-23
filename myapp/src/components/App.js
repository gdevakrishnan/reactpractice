import { Component } from "react";
import Table from './Table'

class App extends Component {
    render() {
        const charachters = [
            {
                Name: "Deva Krishnan",
                Rollno: "22eca18"
            },
            {
                Name: "John Wesly",
                Rollno: "22eca49"
            },
            {
                Name: "Prathap",
                Rollno: "22eca23"
            },
            {
                Name: "Arumugam",
                Rollno: "22eca98"
            }
        ];

        return (
            <Table charachtersData = { charachters }/>
        )
    }
}

export default App;