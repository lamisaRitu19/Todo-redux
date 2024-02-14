import React, { useState } from 'react'

function Todo() {
  const [inputData, setInputData] = useState('');
  const [items, setItems] = useState([]);

  const handleAddItem = () => {
    if (!inputData){
        
    }else{
        setItems([ ...items, inputData ]);
        setInputData('');
    }
  }

  const handleDelItem = (id) => {
    const updatedItems = items.filter((item, idx) => idx !== id);
    setItems(updatedItems);
  }

  const handleRemoveAll = () => {
    setItems([]);
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
                items?.map((item, idx) => <div key={idx} className='flex justify-between bg-violet-800 text-white rounded px-4 py-1 mb-2'>
                    <p className='text-lg font-medium'>{item}</p>
                    <button onClick={() => handleDelItem(idx)}>del</button>
                </div>)
            }
        </div>
        <button onClick={handleRemoveAll} className='bg-white font-medium uppercase rounded px-4 py-1'>Remove all</button>
    </div>
  )
}

export default Todo