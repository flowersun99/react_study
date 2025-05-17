import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'
import TodoItem from './components/TodoItem'
import './App.css'

import { useState, useRef } from 'react'

const mockData = [
  {
    isDone: false,
    content: '할일1',
    date: new Date().getTime(),
    id: 1,
  },
  {
    isDone: false,
    content: '할일2',
    date: new Date().getTime(),
    id: 2,
  },  
  {
    isDone: false,
    content: '할일3',
    date: new Date().getTime(),
    id: 3,
  }
]

function App() {

  const [todos, setTodos] = useState(mockData)
  const idRef = useRef(4)

  const onCreate = (content) => {
    const newTodo = {
      isDone: false,
      content : content,
      date: new Date().getTime(),
      id: idRef.current++,
    }
    setTodos([newTodo, ...todos])
  }

  return (
    <div className='App'>
      <Header />
      <Editor onCreate/>
      <List />
      <div className='TodoList'>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  )
}

export default App
