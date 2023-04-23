import { Component } from "react";
import Table from './Table'

class App extends Component {
    state = {
        charachters: [
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
        ]
    }

    removeCharachter = (index) => {
        const { charachters } = this.state;
        let filtered = charachters.filter((charachter, i) => {
            return i !== index
        });

        this.setState({charachters:filtered})
    }

    render() {
        const { charachters } = this.state

        return (
            <Table removeCharachter = { this.removeCharachter } charachtersData = { charachters }/>
        )
    }
}

export default App;