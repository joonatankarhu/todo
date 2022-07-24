import React from 'react';
import EditTask from './TaskItem/EditTask/EditTask';
import TaskItem from './TaskItem/TaskItem';

const TaskList = ({ taskList, setTaskList, setShowModule,openEdit }) => {
  return (
    <div className='mt-10 rounded-xl p-10 shadow-xl border-[1px] border-gray-500/50 font-medium'>
      <h3 className='text-3xl mb-10'>My Tasks</h3>
      <ul className='md:flex md:gap-5'>
        {taskList.map((task) => (
          <li key={task.id} id={task.id}>
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
            />
            <EditTask task={task} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList