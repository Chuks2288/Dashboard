import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { useStateContext } from '../contexts/ContextProvider';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import cartImage from '../data/product5.jpg';
import { Button } from '../components';

export default function Cart() {



    const { isClicked, setIsClicked, currentColor, cart, setCart, addNum, minNUm } = useStateContext();






    return (
        <div className='bg-half-transparent w-screen fixed top-0 right-0'>
            <div className='absolute top-0 right-0 w-90 bg-blue shadow-lg h-screen p-5'
                style={{ zIndex: '100000', backgroundColor: 'white', }}>
                <div className='flex items-center justify-between text-white'>
                    <h2 className='text-black'>Shopping Cart</h2>

                    <TooltipComponent content='cancel' position='BottomCenter'>
                        <button
                            type='button'
                            onClick={() => setIsClicked(false)}
                            style={{ color: 'rgb(153, 171, 180)', borderRadius: '50%' }}
                            className='text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray'
                        >
                            <MdOutlineCancel />
                        </button>
                    </TooltipComponent>
                </div>
                <form action="">
                    <div>
                        <div className="mt-5 p-2 flex items-center gap-2 border-b-1 border-gray-200 pb-5">
                            <img src={cartImage} alt=""
                                className='h-20 w-20  object-cover rounded-md'
                            />

                            <div className='ml-5'>
                                <h2 className='text-black'>Butterscotch ice-cream</h2>
                                <span className='text-black pb-4'>Milk product</span>
                                <div className="mt-4 flex items-center">
                                    <h2 className='text-2xl font-semibold mr-3'>$250</h2>
                                    <div className="">
                                        <span className='text-black p-2 text-1xl border-2 font-bold cursor-pointer'
                                            onClick={minNUm}>-</span>
                                        <span className='text-black border-2 p-2 text-1xl font-bold cursor-pointer'>{cart}</span>
                                        <span className='text-black border-2 p-2 text-1xl font-bold cursor-pointer'
                                            onClick={addNum} >+</span>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="mt-3">
                            <div className="flex items-center justify-between">
                                <h2>Sub Total</h2>
                                <span className='font-semibold'>$250</span>
                            </div>
                            <div className="flex items-center justify-between mt-3">
                                <h2>Total</h2>
                                <span className='font-semibold'>$250</span>
                            </div>
                        </div>
                        <div className="mt-4 text-white">
                            <button className='py-2 px-7 rounded-md w-full font-semibold'
                                style={{ backgroundColor: currentColor }}>Place order</button>
                        </div>
                    </div>
                </form>
            </div >
            <div>

            </div>

        </div >
    )
}
