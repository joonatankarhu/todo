import React, { useEffect } from 'react';
import { useState } from 'react';
import Button from './Components/Button';
import FormModule from './Components/FormModule';
import Header from './Components/Header';
import TaskList from './Components/TaskList/TaskList';
import EditTask from './Components/TaskList/TaskItem/EditTask/EditTask';

function App() {
  // Show/Hide module based on boolean
  const [show, setShow] = useState(false);
  // Edit task component show/hide
  const [showModule, setShowModule] = useState(false);
  // Form inputs
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('Not started');
  // Task List (each task in a state)
  const [taskList, setTaskList] = useState([]);
  // Edit Inputs
  const [newTitle, setNewTitle] = useState();
  const [newDate, setNewDate] = useState();
  const [newStatus, setNewStatus] = useState();


  // Handle the form submit and add item to task list
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setTaskList([
      ...taskList, {
        // New task that gets added to old list
        id: Math.floor(Math.random() * 1000) + 1,
        // id: 5,
        title: title,
        date: date,
        status: status
      }
    ]);
    setTitle('');
    setDate('');
    setStatus('');
    setShow(false); // Hide module after submit
  };

  const openEdit = () => {
    setShowModule(true);
  };

  useEffect(() => {
    // Update the document title using the browser API
    let updatedTaskList = taskList;
    handleEdit(updatedTaskList);
  }, [taskList]);
  
  const handleEdit = (updatedTaskList) => {
    const fillPrevTitle = updatedTaskList.map((taskItem) => {
      return taskItem.title
    });
    const fillPrevDate = updatedTaskList.map((taskItem) => {
      return taskItem.date
    });
    const fillPrevStatus = updatedTaskList.map((taskItem) => {
      return taskItem.status
    });
    setNewTitle(fillPrevTitle); // sets title in editForm to previous one
    setNewDate(fillPrevDate);
    setNewStatus(fillPrevStatus);
  };
  
  return (
    <div className='flex flex-col p-5 placeholder-opacity-100'>
      <Header/>
      <div className='w-full h-80 p-5'>
        <Button setShow={setShow} />
        <TaskList 
          taskList={taskList} 
          setTaskList={setTaskList}
          setShowModule={setShowModule} 
          openEdit={openEdit}
        />
        <EditTask
          setTitle={setTitle}
          showModule={showModule} 
          taskList={taskList} 
          setShowModule={setShowModule}
          newTitle={newTitle} 
          newDate={newDate} 
          newStatus={newStatus}
          hideEdit={() => setShowModule(false)} 
          setTaskList={setTaskList} 
        />
        <FormModule 
          title={title}
          setTitle={setTitle}
          date={date} 
          setDate={setDate}
          status={status} 
          setStatus={setStatus}
          handleFormSubmit={handleFormSubmit}
          taskList={taskList} 
          setTaskList={setTaskList}
          show={show} 
          hideForm={() => setShow(false)} 
        />
      </div>
    </div>
  )
};

export default App;