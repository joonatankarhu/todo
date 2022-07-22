import React from 'react';
import { FaCheckSquare, FaEdit, FaTrash } from "react-icons/fa";

const TaskItem = ({ title, date, status }) => {
  return (
    <div className='flex justify-end gap-3 border-[1px] border-white/50 rounded py-3 mb-5'>
      <li className='mr-auto'>
        <div className='flex gap-1 text-lg font-bold'>
          <h6>Task:</h6>
          {title}
        </div>
        <div className='flex gap-1 text-base italic'>
          <h6>Deadline:</h6>
          {date}
        </div>
        <div className='text-base'>
          {status}
        </div>
      </li>
      <div className='flex flex-col gap-2 text-base'>
        <button className='flex items-center gap-1 text-green-700 hover:text-green-500'>
          <FaCheckSquare/>
          <p>Check</p>
        </button>
        <button className='flex items-center gap-1 text-yellow-700 hover:text-yellow-500'>
          <FaEdit/>
          Edit
        </button>
        <button className='flex items-center gap-1 text-red-700 hover:text-red-500'>
          <FaTrash/>
          Delete
        </button>
      </div>
    </div>
  )
}

export default TaskItem;