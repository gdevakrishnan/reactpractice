import React, { useState } from 'react'

function App() {
  const [Atodo, setAtodo] = useState('');   // Atodo for store a todo
  const [Todoobject, setTodoobject] = useState([]);   // Todoobject for store multiple todo objects in an array

  // handleSubmit function to submit the todo
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Atodo.trim() !== '') {
      setTodoobject([...Todoobject, { text: Atodo, status: false }]);
    }
    setAtodo('');
  }

  // handleEdit function for handle the selected todo to edit the text
  const handleEdit = (id) => {
    Todoobject.map((obj, index) => {
      if (index !== id) {
        return obj;
      } else {
        setAtodo(obj.text);
        handleDelete(id)
        return obj;
      }
    })
  }

  // handleDelete function for delete the selected todo based on index number
  const handleDelete = (id) => {
    const filteredTodos = Todoobject.filter((obj, index) => id !== index);
    setTodoobject([...filteredTodos])
  }

  // handleStatus function for handling the status of a todo
  const handleStatus = (i) => {
    setTodoobject(
      Todoobject.map((todo, index) => {
        if (i !== index) {
          return todo;
        } else {
          return { ...todo, status: !(todo.status) }
        }
      })
    )
  }

  // todoTemplate function for generating the template for a todo
  const todoTemplate = () => {
    return (
      Todoobject.map((todo, index) => {
        return (
          // a todo containet
          <div key={index} className={todo.status ? 'todo_container completed_todo_container' : 'todo_container incomplete_todo_container'}>
            {/* todo */}
            <p className={todo.status ? 'todo completed_todo' : 'todo incomplete_todo'}>{todo.text}</p>
            <div className='todo_controls'>
              {/* Edit btn */}
              <button className='btn edit_btn' onClick={() => handleEdit(index)}><i className="fa fa-edit" aria-hidden="true"></i></button>
              {/* Delete btn */}
              <button className='btn delete_btn' onClick={() => handleDelete(index)}><i className="fa fa-trash" aria-hidden="true"></i></button>
              {/* status btn */}
              <button className={todo.status ? 'btn completed_btn' : 'btn incomplete_btn'} onClick={() => handleStatus(index)}>{todo.status ? 'completed' : 'incomplete' }</button>
            </div>
          </div>
        );
      })
    );
  }

  return (
    // todo app
    <div className='todo_app'>
      {/* todo app title */}
      <h1 className='todo_title'>Todo App</h1>
      {/* todo input form */}
      <form className='todo_form'>
        <input
          type='text'
          placeholder='Enter a todo'
          onChange={(e) => setAtodo(e.target.value)}
          value={Atodo}
        />
        <input
          type='submit'
          value={'Submit'}
          onClick={(e) => handleSubmit(e)}
        />
      </form>
      {/* todo container */}
      <div className='container'>
        {todoTemplate()}
      </div>
    </div>
  )
}

export default App;