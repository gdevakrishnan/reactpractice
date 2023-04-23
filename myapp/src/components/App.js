import { Component } from "react"
import Table from "./Table";
import Form from "./Form";

class App extends Component {
    state = {
        charachters: []
    }

    render() {
        const { charachters } = this.state;

        let removeCharachter = (i) => {
            const filteredCharachters = charachters.filter((charachters, index) => {
                return (i !== index);
            });

            this.setState({ charachters: filteredCharachters });
        }

        let getCharachter = (newChar) => {
            this.setState({charachters: [...this.state.charachters, newChar]});
        }

        return (
            <>
                <Form getCharachter = { getCharachter }/>
                <Table removeCharachter={removeCharachter} charachtersData={charachters} />
            </>
        )
    }
}

export default App;