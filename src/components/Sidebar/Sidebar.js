import React from 'react'
import avatar from '../../includes/img/png/_691a8aef-e8b1-4bd6-b4b0-dca9bb0e1d64.svg'

function Sidebar(props) {
    const { arr_img_services, arr_apps, arr_games } = props;

    const openSidebar = () => {
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.toggle('sidebar-transition');
    }

    return (

        <aside className='absolute z-20 min-h-screen App__aside flex overflow-hidden'>

            <div className='sidebar rounded-r-lg '>
                <h2 className='font-bold text-xl cursor-default mt-4'>Services</h2>
                <div className='flex flex-col justify-between h-full'>
                    <div className='sidebar__content px-2'>
                        <section className='mt-4'>
                            <h3 className='text-left font-bold mb-2'> Image Editing </h3>
                            <ul className='text-left  px-4 '>
                                {arr_img_services.map((item, index) => {
                                    if (index === 0) {
                                        return <a key={index} href={item.url} className='cursor-pointer page-active'>
                                            <li className='mb-4 hover-underline-animation'>
                                                {item.title}
                                            </li>
                                        </a>
                                    } else {
                                        return <a key={index} href={item.url} className='  cursor-pointer'>
                                            <li className='mb-4 hover-underline-animation'>
                                                {item.title}
                                            </li>
                                        </a>
                                    }
                                })}
                            </ul>
                        </section>
                        <section className='mt-4'>
                            <h3 className='text-left font-bold mb-2'>Apps</h3>
                            <ul className='text-left px-4'>
                                {arr_apps.map((item, index) => {
                                    if (index === 0) {
                                        return <a key={index} href={item.url} className='cursor-pointer page-active'>
                                            <li className='mb-4 hover-underline-animation'>
                                                {item.title}
                                            </li>
                                        </a>
                                    } else {
                                        return <a key={index} href={item.url} className='  cursor-pointer'>
                                            <li className='mb-4 hover-underline-animation'>
                                                {item.title}
                                            </li>
                                        </a>
                                    }
                                })}
                            </ul>
                        </section>
                        <section className='mt-4'>
                            <h3 className='text-left font-bold mb-2'>Games</h3>
                            <ul className='text-left px-4'>
                                {arr_games.map((item, index) => {
                                    if (index === 0) {
                                        return <a key={index} href={item.url} className='cursor-pointer page-active'>
                                            <li className='mb-4 hover-underline-animation'>
                                                {item.title}
                                            </li>
                                        </a>
                                    } else {
                                        return <a key={index} href={item.url} className='  cursor-pointer'>
                                            <li className='mb-4 hover-underline-animation'>
                                                {item.title}
                                            </li>
                                        </a>
                                    }
                                })}
                            </ul>
                        </section>
                    </div>
                    <div className='bg-black opacity-90 h-40 flex'>
                        <div>
                            <img src={avatar} alt="" className='w-16 h-16 rounded-full m-2' />
                        </div>
                        <div className='flex flex-col mt-2 w-40'>
                            <h3 className='text-left text-white font-bold'>John Doe</h3>
                            <h4 className='text-left text-white font-bol'>Web Developer</h4>
                            <h4 className='text-left text-white font-bol'>Free Account</h4>
                        </div>
            
                    </div>
                </div>
            </div>
            <button className='btn bg-black hover:bg-black/50 h-fit text-white rounded-r-lg mt-10 p-4' onClick={() => openSidebar()}>
                open <br /> Sidebar
            </button>
        </aside>
    )
}

export default Sidebar