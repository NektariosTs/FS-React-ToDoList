import { useState } from "react"
import "./style.css"

function App() {
const[newItem , setNewItem] = useState("")
const[todos, setTodos] = useState([])


function handleSumbit(e){
  e.preventDefault()

setTodos(currentTodos => {
  return[
    ...todos , {id:crypto.randomUUID(), title: newItem , done : false},
     ]
  })
}

function deleteTodo(id){
  setTodos(currentTodos => {
    return currentTodos.filter(todo => todo.id !==id)
  })
}


  return (
    <>
  <form onSubmit={handleSumbit} className="new-item-form">
    <div className="form-row">
      <label htmlFor="item" className="label">New Item</label>
      <input value={newItem}
      onChange={e=> setNewItem(e.target.value)} //
      type="text" 
      id="item" 
      placeholder="what you want to add today?"/>
    </div>
    <button className="btn">Add</button>
  </form>
    <ul className="list">
     {todos.map(todo =>{
      return (<li key={todo.id}>
        <label>
         {todo.title}
        </label>
        <button onClick={() => deleteTodo(todo.id)} className="delbtn">Delete</button>
    </li>
    )
     })}
    </ul>
    </>
  ) 
}
export default App;
