import React from 'react';
import { Todo } from '../model';
import './styles.css';
import SingleTodo from './SingleTodo';

interface Props {
  todos: Todo[];
  setToDos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const ToDoList = ({ todos, setToDos }: Props) => {
  return (
    <div className='todos'>
      {todos.map((todo) => (
        <SingleTodo todo={todo} key={todo.id} todos={todos} setToDos={setToDos} />
      ))}
    </div>
  );
};

export default ToDoList;
