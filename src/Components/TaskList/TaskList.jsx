import React from 'react';

const TaskList = () => {
  const myTasks = ['Workout', 'Dinner', 'Study'];
  

  


  return (
    <div className='mt-10 border-[1px] border-white/75 p-5 text-white font-medium'>
      <h3 className='text-xl'>My Tasks</h3>
      <ul>
        {myTasks.map((task) => {
          return (
            <div>
              {task}
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default TaskList