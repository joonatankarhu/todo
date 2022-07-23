import React from 'react';

const EditTask = (props) => {

  // Hide module
  if(!props.showModule) {
    return null
  };

  return (
    <div onClick={props.hideEdit} className='bg-black/50 flex flex-col items-center justify-center fixed left-0 top-0 right-0 bottom-0 py-5 px-10 z-20'>
      <div onClick={e => e.stopPropagation()} className='w-auto bg-white rounded-xl p-10'>
        <div className='mb-3'>
          <h3 className='text-2xl font-bold text-center'>Edit Task</h3>
        </div>
        <form onSubmit={props.handleEditSubmit} className='flex flex-col gap-2 md:gap-4'>
          <label className='flex flex-col gap-1'>
            <h5 className='text-lg'>{props.title}</h5>
            <input 
              id={props.id}
              value={props.newName}
              onChange={props.handleEditChange}
              required 
              type="text" 
              className='border-[1px] rounded-lg py-1 px-2 border-slate-600/40 placeholder:text-slate-700 font-normal'
            />
          </label>
          <label className='flex flex-col gap-1'>
            <h5 className='text-lg'>{props.date}</h5>
            <input 
              value={props.date}
              onChange={(e) => props.setDate(e.target.value)}
              required
              className='border-[1px] rounded-lg py-1 px-2 border-slate-600/40 placeholder:text-slate-700 font-normal'
              type="date" 
              name="deadline" 
            />
          </label>
          <label className='flex flex-col gap-1'>
            <h5 className='text-lg'>{props.status}</h5> 
            <select 
              value={props.status}
              onChange={(e) => props.setStatus(e.target.value)}
              name="status"
              className='border-[1px] rounded-lg py-1 px-1 border-slate-600/40 placeholder:text-slate-700 font-normal'
            >
              <option value="in progress">In progress</option>
              <option value="Not started">Not started</option>
              <option value="Done">Done</option>
            </select>
          </label>
          <div className='flex flex-col gap-3 items-center md:flex-row-reverse md:justify-center md:items-center md:mt-5'>
            <button onClick={props.hideEdit} className='bg-red-400 hover:bg-red-600  w-full hover:cursor-pointer text-lg py-2 rounded text-white font-medium md:px-5'>Update</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditTask;