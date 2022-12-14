import React from 'react';
import { useState } from 'react';
import Button from './Components/Button';
import FormModule from './Components/FormModule';
import Header from './Components/Header';
import TaskList from './Components/TaskList/TaskList';

function App() {
  // Show/Hide module based on boolean new comment
  const [show, setShow] = useState(false);
  // Edit task component show/hide
  const [showModule, setShowModule] = useState(false);
  // Form inputs
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('Not started');
  // Task List (each task in a state)
  const [taskList, setTaskList] = useState([]);
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

  return (
    <div className='font-["Roboto"] flex flex-col p-0 md:p-5 placeholder-opacity-100'>
      <Header/>
      <div className='w-full h-80 p-5'>
        <Button setShow={setShow} />
        <TaskList 
          taskList={taskList} 
          setTaskList={setTaskList}
          setShowModule={setShowModule} 
          openEdit={openEdit} 
          title={title}
          setTitle={setTitle}
          showModule={showModule} 
          hideEdit={() => setShowModule(false)} 
          setDate={setDate}
          setStatus={setStatus}
          newTitle={newTitle}
          setNewTitle={setNewTitle}
          newDate={newDate}
          setNewDate={setNewDate}
          newStatus={newStatus}
          setNewStatus={setNewStatus}
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