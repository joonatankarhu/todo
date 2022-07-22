import React from 'react';

const FormModule = (props) => {
  if(!props.show) {
    return null
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

  return (
    <div onClick={props.hideForm} className='bg-black/50 flex flex-col items-center justify-center fixed left-0 top-0 right-0 bottom-0 py-5 px-10 z-20'>
      <div onClick={e => e.stopPropagation()} className='w-auto bg-white rounded-xl p-10'>
        <div className='mb-3'>
          <h3 className='text-2xl font-bold text-center'>New Task</h3>
        </div>
        <form onSubmit={handleSubmit} className='flex flex-col gap-2 md:gap-4'>
          <label className='flex flex-col gap-1'>
            <h5 className='text-lg'>Title</h5>
            <input 
              placeholder="Task name..."
              className='border-[1px] rounded-lg py-1 px-2 border-slate-600/40 placeholder:text-slate-700 font-normal'
              type="text" 
              name="task" 
            />
          </label>
          <label className='flex flex-col gap-1'>
            <h5 className='text-lg'>Date</h5>
            <input 
              className='border-[1px] rounded-lg py-1 px-2 border-slate-600/40 placeholder:text-slate-700 font-normal'
              type="date" 
              name="deadline" 
            />
          </label>
          <label className='flex flex-col gap-1'>
            <h5 className='text-lg'>Status</h5> 
            <select 
              name="status"
              className='border-[1px] rounded-lg py-1 px-1 border-slate-600/40 placeholder:text-slate-700 font-normal'
            >
              <option value="in progress">In progress</option>
              <option value="Not started">Not started</option>
              <option value="Done">Done</option>
            </select>
          </label>
          <div className='flex flex-col gap-3 items-center md:flex-row-reverse md:justify-center md:items-center md:mt-5'>
            <button 
              type="submit" 
              className='bg-blue-600 hover:bg-blue-800 hover:cursor-pointer w-full mt-5 py-2 rounded text-white text-lg font-medium md:px-5 md:mt-0'
            >Create</button>
            <button onClick={props.hideForm} className='bg-red-400 hover:bg-red-600  w-full hover:cursor-pointer text-lg py-2 rounded text-white font-medium md:px-5'>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FormModule;