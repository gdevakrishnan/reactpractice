import React, { useState } from 'react'
import Todo from './Todo';

function Form() {
    const [Atodo, setAtodo] = useState("");
    const [Todolist, setTodolist] = useState([]);

    const handleInput = (e) => {
        setAtodo(e.target.value);
    }

    const todoSubmit = (e) => {
        e.preventDefault();
        setTodolist([...Todolist, Atodo])
        setAtodo("");
    }

    const deleteTodo = (i) => {
        Todolist.splice(i, 1);
        setTodolist([...Todolist])
    }

    const editTodo = (todo, index) => {
        console.log(todo + " " + index);
        setAtodo(todo);
        Todolist.splice(index,1);
    }

    return (
        <>
            <section className='page form_page'>
                <form>
                    <input
                        type='text'
                        placeholder='Enter a todo'
                        onChange={(e) => handleInput(e)}
                        value={Atodo}
                    />
                    <input
                        type='submit'
                        value={"Submit"}
                        onClick={(e) => todoSubmit(e)}
                    />
                </form>
                <Todo Todolist={Todolist} deleteTodo={deleteTodo} editTodo = {editTodo} />
            </section>
        </>
    )
}

export default Form;