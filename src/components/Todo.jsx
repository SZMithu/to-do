import React, { useState } from 'react'
import InputArea from './InputArea';
import TodoItem from './TodoItem';

 const Todo = () => {

 
  const [items, setItems] = useState([]);

 

  const addItem = (inputText) => {
    setItems((prevItems)=>[...prevItems, inputText]);
  };
  function deleteItem(id) {
    setItems(prevItems => {  
      return prevItems.filter((item, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div className='container'>
      <div className='heading'>
        <h1>To-Do</h1> 
      </div>
      <InputArea 
      onAdd={addItem} />
      <div>
        <ul>
          {items.map((item, index)=>
          <TodoItem 
          key={index} 
          id={index} 
          text={item} 
          onChacked={deleteItem} />)}
        </ul>
      </div>
    </div>
  )
}
export default Todo;