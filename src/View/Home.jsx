import React from 'react';
import { useState } from 'react';
import CreateTaskModule from '../Components/CreateTaskModule';
 
const Home = () => {
    const [show, setShow] = useState(false);

    return (
        <div className='p-5'>
            <h2 className='text-4xl text-white border-b-[1px] border-white/75 md:text-5xl m-5 mb-10 pb-3'>Weekly Tasks</h2>
            <div className='w-full h-80 p-5'>
                <div onClick={() => setShow(true)} className='bg-green-500 inline py-2 px-5 rounded text-white font-medium hover:bg-green-600 hover:cursor-pointer'>New Task</div>
                <div className='mt-10 border-[1px] border-white/75 p-5 text-white font-medium'>
                    <ul className='flex flex-col gap-1'>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                    </ul>
                </div>
            </div>
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