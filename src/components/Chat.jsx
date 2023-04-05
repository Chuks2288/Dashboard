import React from 'react';

import { MdOutlineCancel } from 'react-icons/md';
import { useStateContext } from '../contexts/ContextProvider';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import chatImage from '../data/avatar.jpg';

import { Button } from '../components';


export default function Chat() {

    const { isClicked, setIsClicked, currentColor } = useStateContext();

    return (
        <div className=''>

            <div className="absolute w-72 shadow-lg
            top-20 right-10 rounded-md"
                style={{ backgroundColor: 'white' }}>

                <div className="p-2 flex justify-between items-center ">
                    <h2 className='text-black font-bold'>Messages</h2>
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
                <div className="p-7 pt-2">
                    <div className="flex border-b-1 border-gray-400 pb-2 cursor-pointer">
                        <img src={chatImage}
                            className='w-10 h-10 rounded-full object-cover'
                        />
                        <div className="pl-3">
                            <h2 className='text-sm font-bold'>Roman Joined the Team</h2>
                            <span className='text-sm'>Congratulate him</span>
                            <span className='block text-sm'>09:20am</span>
                        </div>
                    </div>
                    <div className="flex pt-3  border-b-1 border-gray-400 pb-2 cursor-pointer">
                        <img src={chatImage}
                            className='w-10 h-10 rounded-full object-cover'
                        />
                        <div className="pl-3">
                            <h2 className='text-sm font-bold'>New message received</h2>
                            <span className='text-sm'>Selma sent a message</span>
                            <span className='block text-sm'>11:20am</span>
                        </div>
                    </div>
                    <div className="flex pt-3  border-b-1 border-gray-400 pb-2 cursor-pointer">
                        <img src={chatImage}
                            className='w-10 h-10 rounded-full object-cover'
                        />
                        <div className="pl-3">
                            <h2 className='text-sm font-bold'>New payment received</h2>
                            <span className='text-sm'>Check your earnings</span>
                            <span className='block text-sm'>01:40pm</span>
                        </div>
                    </div>
                    <div className="flex pt-3  border-b-1 border-gray-400 pb-2 cursor-pointer">
                        <img src={chatImage}
                            className='w-10 h-10 rounded-full object-cover'
                        />
                        <div className="pl-3">
                            <h2 className='text-sm font-bold'>Jolly completed tasks</h2>
                            <span className='text-sm'>Assign new tasks</span>
                            <span className='block text-sm'>11:20am</span>
                        </div>
                    </div>
                </div>

                <div className='mt-2 pb-4 pl-2 pr-2'>
                    <Button
                        color='white'
                        bgColor={currentColor}
                        text='See all messages'
                        borderRadius='10px'
                        siz='md'
                    />
                </div>
            </div>

        </div>
    )
}
