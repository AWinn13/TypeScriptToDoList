import React from 'react';
import { Todo } from '../model';
import { AiFillEdit, AiFillDelete, AiOutlineCheck } from 'react-icons/ai';
import './styles.css';

type Props = {
  todo: Todo;
  todos: Todo[];
  setToDos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setToDos }: Props) => {
  const handleComplete = (id: number) => {
    setToDos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };
  return (
    <form className='singleTodo'>
      <span
        className='singleTodoText'
        style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
      >{todo.todo}</span>
      <div>
        <span className='icon'>
          <AiFillEdit />
        </span>
        <span className='icon'>
          <AiFillDelete />
        </span>
        <span className='icon' onClick={() => handleComplete(todo.id)}>
          <AiOutlineCheck />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
