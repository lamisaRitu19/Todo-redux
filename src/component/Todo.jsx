import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, removeTodo } from '../actions';
import todoReducers from '../reducers/todoReducers';

function Todo() {
  const [inputData, setInputData] = useState('');
  // const [items, setItems] = useState([]);
  const dispatch = useDispatch();
  const list = useSelector(state => state.todoReducers.list)

  const handleAddItem = () => {
    if (inputData){
      dispatch(addTodo(inputData));
      // setItems([ ...items, inputData ]);
      setInputData('');
    }
  }

  const handleDelItem = (id) => {
    dispatch(deleteTodo(id));
    // const updatedItems = items.filter((item, idx) => idx !== id);
    // setItems(updatedItems);
  }

  const handleRemoveAll = () => {
    dispatch(removeTodo());
    // setItems([]);
  }
  
  return (
    <div className='w-1/3 mx-auto'>
        <h2 className='text-white text-2xl font-medium pt-32 mb-6'>Add Your List Here</h2>
        <div className='flex justify-between items-center bg-white rounded px-4 py-2 mb-4'>
            <input type='text' placeholder='Add item...' value={inputData} onChange={(e) => setInputData(e.target.value)} className='w-3/4 rounded'></input>
            <button onClick={handleAddItem} className='text-2xl font-bold'>+</button>
        </div>
        <div className='mb-4'>
            {
                list.map(item => <div key={item.id} className='flex justify-between bg-violet-800 text-white rounded px-4 py-1 mb-2'>
                    <p className='text-lg font-medium'>{item.data}</p>
                    <button onClick={() => handleDelItem(item.id)}>del</button>
                </div>)
            }
        </div>
        <button onClick={handleRemoveAll} className='bg-white font-medium uppercase rounded px-4 py-1'>Remove all</button>
    </div>
  )
}

export default Todo