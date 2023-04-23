import { Component } from "react";

let Theader = () => {
    return (
        <thead>
            <tr key={"Theader"}>
                <td style={{ fontWeight: "bold" }} key={"Name"}>Name</td>
                <td style={{ fontWeight: "bold" }} key={"Rollno"}>Roll No</td>
                <td style={{ fontWeight: "bold" }} key={"Action"}>Action</td>
            </tr>
        </thead>
    )
}

let Tbody = (props) => {
    const { charachtersData, removeCharachter } = props;
    const rows = charachtersData.map((charachter, index) => {
        return (
            <tr key={index}>
                <td>{charachter.Name}</td>
                <td>{charachter.Rollno}</td>
                <td><button onClick={() => removeCharachter(index)}>Delete</button></td>
            </tr>
        )
    })

    return (
        <tbody>
            { rows }
        </tbody>
    )
}

class Table extends Component {
    render() {
        const { charachtersData, removeCharachter } = this.props;
        return (
            <table>
                <Theader />
                <Tbody removeCharachter = { removeCharachter } charachtersData={charachtersData} />
            </table>
        )
    }
}

export default Table;