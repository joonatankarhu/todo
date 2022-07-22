import React from 'react';

const Button = (props) => {
  return (
    <button onClick={() => props.setShow(true)} className='bg-blue-500 inline py-2 px-8 rounded text-white font-medium hover:bg-blue-600 hover:cursor-pointer'>
        New Task
    </button>
  )
}

export default Button