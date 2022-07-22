import React from 'react';
import { useState } from 'react';

// Import Components
import Button from './Components/Button';
import FormModule from './Components/FormModule';
import TaskList from './Components/TaskList/TaskList';

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className='flex flex-col bg-black/90 h-screen p-5'>
      <h2 className='text-4xl text-white border-b-[1px] border-white/75 md:text-5xl m-5 mb-10 pb-3'>Weekly Tasks</h2>
      <div className='w-full h-80 p-5'>
        <Button setShow={setShow} />
        <TaskList />
        <FormModule 
          show={show} 
          hideForm={() => setShow(false)} 
        />
      </div>
      
    </div>
  )
};

export default App;
