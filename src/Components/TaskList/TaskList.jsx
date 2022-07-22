import React from 'react';
import TaskItem from './TaskItem/TaskItem';

const TaskList = ({ todos }) => {
  return (
    <div className='mt-10 border-[1px] border-black rounded-xl p-10 shadow-2xl border-[2px] font-medium'>
      <h3 className='text-2xl mb-10'>Task List</h3>
      <ul>
        {todos.map((task) => (
          <TaskItem 
            id={task.id}
            title={task.title} 
            date={task.date}
            status={task.status}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList