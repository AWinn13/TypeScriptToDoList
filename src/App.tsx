import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import ToDoList from './components/ToDoList';
import { Todo } from './model';

const App: React.FC = () => {
  const [todo, setToDo] = useState<string>("");
  const [todos, setToDos] = useState<Todo[]>([])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (todo){
      setToDos([...todos, {id :Date.now(), todo:todo, isCompleted:false}])
      setToDo("")
    }
  };
  console.log(todos)
  return (
    <div className='App'>
      <span className='heading'>Task</span>
      <InputField todo={todo} setToDo={setToDo} handleSubmit={handleSubmit} />
    <ToDoList todos={todos} setToDos={setToDos} />
    </div>
  );
};

export default App;
