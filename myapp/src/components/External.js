import { createContext, useContext, useState } from "react";

const ExternalUserName = createContext()

export default function External(props) {
    const { userGlobal } = props
    const ExternalUser = useContext(userGlobal);
    const [user] = useState(ExternalUser)
    return (
        <ExternalUserName.Provider value={user}>
            <h1>External Component {user}</h1>
            <ExternalChild1 />
        </ExternalUserName.Provider>
    );
}

const ExternalChild1 = () => {
    return (
        <>
            <h1>External Child 1</h1>
            <ExternalChild2 />
        </>
    );
}

const ExternalChild2 = () => {

    const userName = useContext(ExternalUserName);
    return (
        <>
            <h1>External Child 2 {userName}</h1>
        </>
    );
}