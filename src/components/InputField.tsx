import React, { useRef } from 'react';
import './styles.css';

interface Props {
  todo: string;
  setToDo: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setToDo, handleSubmit }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form className='input' onSubmit={(e) => {
        handleSubmit(e)
        inputRef.current?.blur();
    }}>
      <input
        ref={inputRef}
        type='text'
        value={todo}
        onChange={(e) => setToDo(e.target.value)}
        className='inputBox'
      />
      <button className='inputSubmit'>Go</button>
    </form>
  );
};

export default InputField;
