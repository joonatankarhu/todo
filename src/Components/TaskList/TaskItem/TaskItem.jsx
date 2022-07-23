import React from 'react';
import { FaEdit, FaTrash } from "react-icons/fa";

const TaskItem = ({ title, date, status, task, taskList, setTaskList, setShowModule }) => {

  // Delete Task handler
  const deleteHandler = () => {
    setTaskList(taskList.filter((el) => el.id !== task.id));
  };

  return (
    <div className='flex justify-end gap-3 border-[1px] rounded p-5 mb-5 text-white bg-blue-600 shadow'>
      <div className='mr-auto'>
        <div className='flex gap-1 text-xl font-bold'>
          <h6>Task:</h6>
          {title}
        </div>
        <div className='flex gap-1 text-base italic'>
          <h6>Deadline:</h6>
          {date}
        </div>
        <div className='flex gap-1 text-base'>
          <h6>Status: </h6>
          {status}
        </div>
      </div>
      <div className='flex flex-col gap-2 text-base'>
        <button onClick={() => setShowModule(true)} className='flex items-center gap-1 text-white hover:bg-white hover:text-blue-600 px-3 py-1 rounded-xl'>
          <FaEdit/>
          Edit
        </button>
        <button onClick={deleteHandler} className='flex items-center gap-1 text-white hover:bg-white hover:text-blue-600 px-3 py-1 rounded-xl'>
          <FaTrash/>
          Delete
        </button>
      </div>
    </div>
  )
}

export default TaskItem;