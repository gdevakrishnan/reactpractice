import { Component } from "react";

let Theader = () => {
    return (
        <thead>
            <tr key={"Theader"}>
                <td key={"Name"} style={{ fontWeight: "bold" }}>Name</td>
                <td key={"Rollno"} style={{ fontWeight: "bold" }}>Roll No</td>
                <td key={"Action"} style={{ fontWeight: "bold" }}>Action</td>
            </tr>
        </thead>
    )
}

let Tdescription = (props) => {
    const { charachtersData, removeCharachter } = props
    const charachterTableTemplate = charachtersData.map((charachter, index) => {
        return (
            <tr key = { index }>
                <td>{charachter.Name}</td>
                <td>{ charachter.Rollno }</td>
                <td><button onClick = { () => removeCharachter(index) }>Delete</button></td>
            </tr>
        )
    })

    return (
        <tbody>
            { charachterTableTemplate }
        </tbody>
    )
}

class Table extends Component {
    render() {
        const { charachtersData, removeCharachter } = this.props;

        return (
            <table>
                <Theader />
                <Tdescription removeCharachter = { removeCharachter } charachtersData = { charachtersData }/>
            </table>
        )
    }
}

export default Table;