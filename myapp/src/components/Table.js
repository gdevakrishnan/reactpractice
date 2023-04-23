import { Component } from "react";

let Theader = () => {
    return (
        <thead>
            <tr key={"Theader"}>
                <td style={{ fontWeight: "bold" }} key={"Name"}>Name</td>
                <td style={{ fontWeight: "bold" }} key={"rollNo"}>Roll No</td>
            </tr>
        </thead>
    )
}

let Tbody = (props) => {
    const { charachtersData } = props;
    const rows = charachtersData.map((charachter, index) => {
        return (
            <tr key={index}>
                <td>{charachter.Name}</td>
                <td>{charachter.Rollno}</td>
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
        const { charachtersData } = this.props;
        return (
            <table>
                <Theader />
                <Tbody charachtersData={charachtersData} />
            </table>
        )
    }
}

export default Table;