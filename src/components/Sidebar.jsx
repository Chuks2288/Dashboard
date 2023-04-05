import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';



export default function Sidebar() {
    const { activeMenu, setActiveMenu, screenSize, currentColor } = useStateContext();

    const handleCloseSideBar = () => {
        if (activeMenu && screenSize <= 900) {
            setActiveMenu(false);
        }
    }


    const activeLink =
        'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-black text-md m-2';
    const normalLink =
        'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-black text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

    return (
        <div className='ml-3 h-screen md:overflow-hidden overflow:auto
        md:hover:overflow-auto pb-10'>

            {activeMenu && (
                <>
                    <div className='flex justify-between items-center'>
                        <Link to='/' onClick={handleCloseSideBar}
                            className='flex items-center  gap-3 ml-3 
                            font-extrabold tracking-tight text-slate-900 '>
                            <SiShopware /> <span>Shoppy</span>
                        </Link>

                        <TooltipComponent content='Menu' position='BottomCenter'>
                            <button type='button' onClick={() =>
                                setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
                                className='text-x1 rounded-full
                                mt-4 p-3 hover:bg-blue block md:hidden'>
                                <MdOutlineCancel />
                            </button>
                        </TooltipComponent>

                    </div>
                    <div className='mt-10'>
                        {links.map((item) => (
                            <div key={item.title}
                            >
                                <p className='text-gray-400 mt-4 uppercase'>
                                    {item.title}
                                </p>
                                {item.links.map((link) => (
                                    <NavLink
                                        to={`/${link.name}`}
                                        key={link.name}
                                        onClick={handleCloseSideBar}
                                        style={({ isActive }) => ({
                                            backgroundColor: isActive ? currentColor : ''
                                        })}
                                        className={({ isActive }) =>
                                            isActive ? activeLink : normalLink}>
                                        {link.icon}
                                        <span className='capitalize'>{link.name}</span>

                                    </NavLink>
                                ))}
                            </div>
                        ))}
                    </div>
                </>
            )
            }

        </div >
    )
}
