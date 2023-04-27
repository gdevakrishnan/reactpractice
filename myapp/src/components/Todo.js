function Todo(props) {
    const {Todolist, deleteTodo, editTodo} = props;
    const Template = Todolist.map((Atodo, i) => {
        return (
            <div key={i} style={{display: 'flex'}}>
                <p>{Atodo}</p>
                <button onClick={() => deleteTodo(i)}>Delete</button>
                <button onClick={() => editTodo(Atodo, i)}>Edit</button>
            </div>
        );
    })

    return (
        <>
            <h1>Todo List</h1>
            {Template}
        </>
    )
}

export default Todo