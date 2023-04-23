import { Component } from "react";

class Form extends Component {
    
    initialstate = {
        Name: "",
        Rollno: ""
    }
    
    state = this.initialstate;
    
    render() {
        const { getCharachter } = this.props;
        const handleChange = (e) => {
            let {name, value} = e.target;
            this.setState({[name]: value});
        }
        
        const submitForm = (e) => {
            // PrevenetDefault method is used to avoid reload the browser
            e.preventDefault();
            getCharachter(this.state);
            this.setState(this.initialstate);
        }

        return (
            <section>
                <form>
                    <label htmlFor="Name">Name</label>
                    <input
                        type="text"
                        id="Name"
                        name="Name"
                        onChange={handleChange}
                        value={this.state.Name}
                        />
                    <label htmlFor="Rollno">Roll No</label>
                    <input
                        type="text"
                        id="Rollno"
                        name="Rollno"
                        onChange={handleChange}
                        value={this.state.Rollno}
                    />
                    <input
                        type="submit"
                        value="submit"
                        onClick={submitForm}
                    />
                </form>
            </section>
        )
    }
}

export default Form;