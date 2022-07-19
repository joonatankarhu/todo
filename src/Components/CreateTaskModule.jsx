import React from 'react';

const CreateTaskModule = (props) => {
  if(!props.show) {
    return null
  }


  return (
    <div onClick={props.hideModule} className='bg-black/50 flex flex-col items-center justify-center fixed left-0 top-0 right-0 bottom-0 py-5 px-10 z-20'>
      <div onClick={e => e.stopPropagation()} className='w-auto bg-white rounded p-5'>
          <div className='pb-2'>
            <h3 className='text-xl font-bold'>Create New Task</h3>
          </div>
        <div>
          <ul>
            <li>
              <div>
                <h4>Title</h4>
                <input type="text" className='border-2 border-black/25 rounded pl-1' required/>
              </div>
            </li>
            <li>
              <div>
                <h4>Deadline</h4>
                <input type="date" className='border-2 border-black/25 rounded pl-1' />
              </div>
            </li>
            <li>
              <div>
                <h4>Status</h4>
                <select name="status" id="taskStatus" className='border-2 border-black/25 rounded'>
                  <option value="in progress">In progress</option>
                  <option value="Not started">Not started</option>
                  <option value="Done">Done</option>
                </select>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <button onClick={props.hideModule} className='bg-green-500 hover:bg-green-700 hover:cursor-pointer w-full mt-5 py-2 rounded text-white font-medium'>Add Task</button>
        </div>
        <div>
          <button onClick={props.hideModule} className='bg-red-500 hover:bg-red-700 hover:cursor-pointer w-full mt-5 py-2 rounded text-white font-medium'>Close Module</button>
        </div>
      </div>
    </div>
  )
}

export default CreateTaskModule;