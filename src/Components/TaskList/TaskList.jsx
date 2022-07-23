import React from 'react';
import TaskItem from './TaskItem/TaskItem';

const TaskList = ({ taskList, editTitle, setTaskList, setShowModule }) => {
  return (
    <div className='mt-10 rounded-xl p-10 shadow-xl border-[1px] border-gray-500/50 font-medium'>
      <h3 className='text-3xl mb-10'>My Tasks</h3>
      <ul className='md:flex md:gap-5'>
        {taskList.map((task) => (
          <li key={task.id}>
            <TaskItem 
              title={task.title} 
              date={task.date}
              status={task.status} 
              task={task}
              taskList={taskList} 
              setTaskList={setTaskList}
              setShowModule={setShowModule}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList