import React from 'react';
import { useState } from 'react';
import CreateTaskModule from '../Components/CreateTaskModule';

 
const Home = () => {
    const [show, setShow] = useState(false);

    return (
        <div className='p-5'>
            <h2 className='text-3xl mb-5'>Weekly Tasks</h2>
            <div onClick={() => setShow(true)} className='bg-green-500 inline py-2 px-5 rounded text-white font-medium hover:bg-green-700 hover:cursor-pointer'>New Task</div>
            <div>
                {/* <ul>
                    {
                        task.map((task) => {
                            <li key={task}>
                                <p>{task}</p>
                            </li>
                        })
                    }
                </ul> */}
            </div>
            <CreateTaskModule hideModule={() => setShow(false)} show={show} />
        </div>
    )
};

export default Home;