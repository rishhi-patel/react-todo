import "./App.css"
import React, { useState } from "react"

function App() {

  const [todo, setTodo] = useState("")
  const [todoList, setTodoList] = useState([])

  const handleCHange=(val)=>{
    console.log({val});
    setTodo(val)
  }

  const onAddTodo = (e) => {
    e.preventDefault()

    if (todo === "") {
      alert("please insert a value")
      return
    }

    const dataToAdd = {
      name: todo,
      timestamp: new Date().getTime(),
    }
    setTodoList((oldVal) => [...oldVal, dataToAdd])
    setTodo("")
  }

  const removeTodo = (index) => {
    let items = [...todoList]
    items.splice(index, 1)
    setTodoList(items)
  }

  return (
    <div className="todo">

      {/* header */}
      <div className="title">
        <span>[React]</span> Todo
      </div>

      {/* 2.input field and buttons */}
      <div className="form-todo">
        <div className="form-title">Add new item:</div>
        <div className="form-container">
          <input
            value={todo}
            onChange={(e) => handleCHange(e.target.value)}
            type="text"
            placeholder="Type something..."
          />
          <button onClick={onAddTodo}>Add</button>
        </div>
      </div>

      {/* 3.list the Todo Items with unordered list */}
      <ul className="todo-list">
        {todoList &&
          todoList.map((item, i) => (
            <li key={i}>
              <div className="info">
                <div>{item.name}</div>
                <div className="time">
                  [ {new Date(item.timestamp).toDateString()} ]
                </div>
              </div>
              <i onClick={() => removeTodo(i)} className="close">
                x
              </i>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default App
