import React from 'react';
import TaskItem from './TaskItem/TaskItem';

const TaskList = ({ taskList, setTaskList, setShowModule,openEdit, setTitle, showModule, title, setDate, setStatus, newTitle, setNewTitle, newDate, setNewDate, newStatus, setNewStatus }) => {
  return (
    <div className='mt-10 rounded-xl md:rounded-3xl p-10 shadow-xl border-[2px] font-medium max-w-3xl border-gray-400/50 min-h-[250px]'>
      <h3 className='text-3xl text-black/90 mb-10 font-bold'>Active Tasks</h3>
      <ul className='md:flex md:gap-5'>
        {taskList.map((task) => (
          <li key={task.id}>
            <TaskItem 
              id={task.id} 
              title={task.title} 
              date={task.date}
              status={task.status} 
              openEdit={openEdit}
              task={task}
              taskList={taskList} 
              setTaskList={setTaskList}
              setShowModule={setShowModule}
              setTitle={setTitle}
              showModule={showModule} 
              setDate={setDate} 
              hideEdit={() => setShowModule(false)} 
              setStatus={setStatus}
              newTitle={newTitle}
              setNewTitle={setNewTitle}
              newDate={newDate}
              setNewDate={setNewDate}
              newStatus={newStatus}
              setNewStatus={setNewStatus}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList