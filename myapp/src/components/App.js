import { Component } from "react"

let Madegoal = () => {
    return (<h1>Goal</h1>)
}

let Missedgoal = () => {
    return (<h1>Not a Goal</h1>)
}

class App extends Component {
    render() {
        const isGoal = this.props.isGoal;

        if (isGoal) {
            return (
                <Madegoal />
            )
        } else {
            return (
                <Missedgoal />
            )
        }
    }
}

export default App;