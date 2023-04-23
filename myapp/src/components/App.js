import { Component } from "react"
import Table from "./Table";

class App extends Component {
    state = {
        charachters: [
            {
                Name: "Deva Krsihnan",
                Rollno: "22eca18"
            },
            {
                Name: "John Wesly",
                Rollno: "22eca49"
            },
            {
                Name: "Mithun",
                Rollno: "22eca55"
            },
            {
                Name: "Prathap",
                Rollno: "22eca34"
            }
        ]
    }

    render() {
        const { charachters } = this.state;

        let removeCharachter = (i) => {
            const filteredCharachters = charachters.filter((charachters, index) => {
                return (i !== index);
            });

            this.setState({charachters: filteredCharachters});
        } 

        return (
            <Table removeCharachter = { removeCharachter } charachtersData = { charachters }/>
        )
    }
}

export default App;