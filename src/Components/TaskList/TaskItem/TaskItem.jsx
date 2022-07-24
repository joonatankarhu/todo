import React from 'react';
import { FaEdit, FaTrash } from "react-icons/fa";

const TaskItem = ({ title, date, status, task, taskList, setTaskList, openEdit}) => {

  // Delete Task handler
  const deleteHandler = () => {
    setTaskList(taskList.filter((el) => el.id !== task.id));
  };

  console.log(task);

  return (
    <div className='flex justify-end gap-3 border-[2px] border-gray-500/40 rounded-lg p-5 mb-5 shadow'>
      <div className='mr-auto'>
        <div className='flex gap-1 text-lg text-black/80 font-bold'>
          <h6>Task:</h6>
          <div className='text-blue-700 font-serif'>
            {title}
          </div>
        </div>
        <div className='flex gap-1 text-base text-red-600/90 italic'>
          <h6>Deadline:</h6>
          {date}
        </div>
        <div className='flex gap-1 text-base text-black/80'>
          <h6>Status: </h6>
          {status}
        </div>
      </div>
      <div className='flex flex-col gap-2 text-base'>
        <button onClick={openEdit} className='flex items-center gap-1 hover:bg-white hover:text-blue-700 px-3 py-1 rounded-xl'>
          <FaEdit/>
          Edit
        </button>
        <button onClick={deleteHandler} className='flex items-center gap-1 hover:bg-white hover:text-red-700 px-3 py-1 rounded-xl'>
          <FaTrash/>
          Delete
        </button>
      </div>
    </div>
  )
}

export default TaskItem;