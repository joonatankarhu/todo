import React from 'react';
import { useState } from 'react';
import Button from './Components/Button';
import FormModule from './Components/FormModule';
import Header from './Components/Header';
import TaskList from './Components/TaskList/TaskList';
import EditTask from './Components/EditTask';

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

  // Handle the form submit and add item to task list
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setTaskList([
      ...taskList, {
        // New task that gets added to old list
        id: Math.floor(Math.random() * 1000) + 1,
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

  return (
    <div className='flex flex-col p-5 placeholder-opacity-100'>
      <Header/>
      <div className='w-full h-80 p-5'>
        <Button setShow={setShow} />
        <TaskList 
          taskList={taskList} 
          setTaskList={setTaskList}
          setShowModule={setShowModule} 
        />
        <EditTask
          showModule={showModule} 
          taskList={taskList} 
          hideEdit={() => setShowModule(false)} 
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