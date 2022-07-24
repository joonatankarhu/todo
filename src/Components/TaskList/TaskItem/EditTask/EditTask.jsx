import React from 'react';
const EditTask = (props) => {
  // Hide module
  if(!props.showModule) {
    return null
  };



  const inputTitleHandler = (e) => {
    props.setTitle(e.target.value);
    props.setNewTitle(e.target.value);
  };

  const inputDateHandler = (e) => {
    props.setDate(e.target.value);
    props.setNewDate(e.target.value);
  };

  const inputStatusHandler = (e) => {
    props.setStatus(e.target.value);
    props.setNewStatus(e.target.value);
  };


  const submitEditHandler = (e) => {
    e.preventDefault();
 



    const newEditTitle = props.newTitle;
    const newEditDate = props.newDate;
    const newEditStatus = props.newStatus;



    props.taskList.splice(0, 1, {
      title: newEditTitle,
      date: newEditDate,
      status: newEditStatus
    })

    props.setShowModule(false);
  };

  return (
    <div onClick={props.hideEdit} className='bg-black/50 flex flex-col items-center justify-center fixed left-0 top-0 right-0 bottom-0 py-5 px-10 z-20'>
      <div onClick={e => e.stopPropagation()} className='w-auto bg-white rounded-xl p-10'>
        <div className='mb-10'>
          <h3 className='text-2xl font-bold text-center'>Edit Task</h3>
        </div>
        <form onSubmit={submitEditHandler} className='flex flex-col gap-4'>
          <label className='flex flex-col gap-1'>
            <input 
              name="title"
              placeholder={props.title}
              onChange={inputTitleHandler}
              required 
              type="text" 
              className='border-[1px] rounded-lg py-1 px-2 border-slate-600/40 placeholder:text-slate-700 font-normal'
            />
          </label>
          <label className='flex flex-col gap-1'>
            <input 
              required 
              onChange={inputDateHandler}
              placeholder={props.date}
              className='border-[1px] rounded-lg py-1 px-2 border-slate-600/40 placeholder:text-slate-700 font-normal'
              type="date" 
              name="deadline" 
            />
          </label>
          <label className='flex flex-col gap-1'>
            <select 
              name="status"
              onChange={inputStatusHandler}
              placeholder={props.status}
              className='border-[1px] rounded-lg py-1 px-1 border-slate-600/40 placeholder:text-slate-700 font-normal'
            >
              <option value="in progress">In progress</option>
              <option value="Not started">Not started</option>
              <option value="Done">Done</option>
            </select>
          </label>
          <button type="submit" className='bg-blue-600 hover:bg-blue-800  w-full hover:cursor-pointer text-lg py-2 rounded text-white mt-5 font-medium md:px-5'>Update</button>
        </form>
      </div>
    </div>
  )
}

export default EditTask;