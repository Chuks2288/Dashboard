import React from 'react';

import { MdOutlineCancel } from 'react-icons/md';
import { useStateContext } from '../contexts/ContextProvider';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import chatImage from '../data/avatar.jpg';

import { CgProfile } from 'react-icons/cg';
import { MdOutlineForwardToInbox } from 'react-icons/md';
import { FaTasks } from 'react-icons/fa';

import { Button } from '../components';


export default function Notification() {

    const { isClicked, setIsClicked, currentColor } = useStateContext();

    return (
        <div className=''>

            <div className="absolute w-72 shadow-lg
            top-20 right-10 rounded-md"
                style={{ backgroundColor: 'white' }}>

                <div className="p-2 flex justify-between items-center ">
                    <h2 className='text-black font-bold'>User Profile</h2>
                    <TooltipComponent content='cancel' position='BottomCenter'>
                        <button
                            type='button'
                            onClick={() => setIsClicked(false)}
                            style={{ color: 'rgb(153, 171, 180)', borderRadius: '50%' }}
                            className='text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray
                            '
                        >
                            <MdOutlineCancel />
                        </button>
                    </TooltipComponent>
                </div>
                <div className="p-2 pt-2">
                    <div className="flex justify-center items-center border-b-1 border-gray-400 pb-2 cursor-pointer">
                        <img src={chatImage}
                            className='w-20 h-20 rounded-full object-cover'
                        />
                        <div className="pl-4">
                            <h2 className='text-1xl font-bold'>Michael Roberts</h2>
                            <span className='text-sm'>Administrator</span>
                            <span className='block text-sm'>info@shop.com</span>
                        </div>
                    </div>
                </div>

                <div className="p-7 pt-2">
                    <div className="flex pt-3 items-center border-b-1 border-gray-400 pb-2 cursor-pointer">
                        <CgProfile
                            className='text-3xl  p-1 shadow-md bg-gray-300 w-10 h-10 rounded-sm'
                            style={{ color: 'green' }}
                        />
                        <div className="pl-3">
                            <h2 className='text-sm font-bold'>My Profile</h2>
                            <span className='text-sm'>Account Settings</span>
                        </div>
                    </div>
                    <div className="flex pt-3 items-center border-b-1 border-gray-400 pb-2 cursor-pointer">
                        <MdOutlineForwardToInbox
                            className='text-3xl  p-1 shadow-md bg-gray-300 w-10 h-10 rounded-sm'
                            style={{ color: 'green' }}
                        />
                        <div className="pl-3">
                            <h2 className='text-sm font-bold'>My Inbox</h2>
                            <span className='text-sm'>Messages & Emails</span>
                        </div>
                    </div>
                    <div className="flex pt-3 items-center border-b-1 border-gray-400 pb-2 cursor-pointer">
                        <FaTasks
                            className='text-3xl  p-1 shadow-md bg-yellow w-10 h-10 rounded-sm'
                            style={{ color: 'green', backgroundColor: 'yellow' }}
                        />
                        <div className="pl-3">
                            <h2 className='text-sm font-bold'>My Tasks</h2>
                            <span className='text-sm'>To-do and Daily Taskts</span>
                        </div>
                    </div>
                </div>

                <div className='mt-2 pb-4 pl-2 pr-2 text-center w-full'>
                    <Button
                        color='white'
                        bgColor={currentColor}
                        text='Log Out'
                        borderRadius='10px'
                        size='md'
                    />
                </div>
            </div>
        </div>

    )
}
