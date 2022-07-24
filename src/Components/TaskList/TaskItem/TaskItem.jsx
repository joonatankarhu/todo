import React from 'react';
import { FaEdit, FaTrash } from "react-icons/fa";
import EditTask from './EditTask/EditTask';


const TaskItem = ({ title, date, status, task, taskList, setTaskList, openEdit, setTitle, showModule, setShowModule, setDate, setStatus, setNewTitle, newTitle, id, newDate, setNewDate, newStatus, setNewStatus}) => {

  // Delete Task handler
  const deleteHandler = () => {
    setTaskList(taskList.filter((el) => el.id !== task.id));
  };


  return (
    <div className='flex flex-col md:flex-row justify-center md:justify-end items-center gap-3 border-[2px] border-gray-500/40 rounded-lg px-4 py-5 md:p-5 mb-5 shadow'>
      <div className='mr-auto'>
        <div className='flex flex-row gap-1 text-lg text-black/80 font-bold'>
          <h6>Task:</h6>
          <div className='text-blue-700 font-serif'>
            {title}
          </div>
        </div>
        <div className='flex flex-col md:flex-row gap-1 text-base text-red-600/90 italic'>
          <h6>Deadline:</h6>
          {date}
        </div>
        <div className='flex flex-row gap-1 text-base text-black/80'>
          <h6>Status: </h6>
          {status}
        </div>
      </div>
      <div className='flex flex-row md:flex-col gap-0 md:gap-2 p-4 md:p-0 text-base'>
        <button onClick={openEdit} className='flex items-center gap-1 hover:bg-white hover:text-blue-700 px-3 py-1 rounded-xl'>
          <FaEdit/>
          Edit
        </button>
        <EditTask
          setTitle={setTitle}
          title={title} 
          id={id} 
          showModule={showModule} 
          taskList={taskList} 
          setShowModule={setShowModule}
          hideEdit={() => setShowModule(false)} 
          setTaskList={setTaskList}
          setDate={setDate}
          newTitle={newTitle}
          setStatus={setStatus}
          setNewTitle={setNewTitle}
          newDate={newDate}
          setNewDate={setNewDate}
          newStatus={newStatus}
          setNewStatus={setNewStatus}
        />
        <button onClick={deleteHandler} className='flex items-center gap-1 hover:bg-white hover:text-red-700 px-3 py-1 rounded-xl'>
          <FaTrash/>
          Delete
        </button>
      </div>
    </div>
  )
}

export default TaskItem;