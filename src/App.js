import React from 'react';
import { useState } from 'react';
import Button from './Components/Button';
import FormModule from './Components/FormModule';
import Header from './Components/Header';
import TaskList from './Components/TaskList/TaskList';

function App() {
  const [show, setShow] = useState(false);
  const [inputText, setInputText] = useState('');
  const [inputDate, setInputDate] = useState({});
  const [inputStatus, setInputStatus] = useState({});
  const [todos, setTodos] = useState([
    {
      id: 100,
      title: 'Workout',
      date: 'Friday',
      status: 'Done'
      // status: [
      //   {
      //     done: 'green'
      //   },
      //   {
      //     notStarted: 'red'
      //   },
      //   {
      //     inProgress: 'yellow'
      //   }
      // ]
    }
  ]);

  return (
    <div className='flex flex-col p-5 placeholder-opacity-100'>
      <Header/>
      <div className='w-full h-80 p-5'>
        <Button setShow={setShow} />
        <TaskList 
          todos={todos} 
        />
        <FormModule 
          inputText={inputText}
          setInputText={setInputText}
          inputDate={inputDate} 
          setInputDate={setInputDate}
          inputStatus={inputStatus}
          setInputStatus={setInputStatus}
          todos={todos} 
          setTodos={setTodos}
          show={show} 
          hideForm={() => setShow(false)} 
        />
      </div>
    </div>
  )
};

export default App;