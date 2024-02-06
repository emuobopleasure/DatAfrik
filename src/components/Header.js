import React, { useState } from 'react'
import { CiMenuFries } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";


const Header = () => {
    const [menuToggle, setMenuToggle] = useState(false)

    // const mobileToggle = () => {
    //     setMenuToggle((prevState) => !prevState)
    // }

    return (
        <header className='fixed top-0 z-10 bg-[#000000] w-full'>
            <div className='max-w-[90rem] mx-auto'>
                <nav className='px-[1rem] lg:px-[4rem]'>
                    <div className='py-[1rem] flex justify-between items-center'>
                        <div>
                            <a href=''>
                                <button className='font-bold text-[20px] hover:text-gray-400'>
                                    JustAnotherUIKit
                                </button>
                            </a>
                        </div>
                        <div className='hidden lg:flex'>
                            <ul className='flex justify-between gap-[20px] items-center font-extralight text-white text-[16px] tracking-[0] leading-[normal]'>
                                <li className='hover:text-gray-400 font-bold'>
                                    <a href='/'>
                                        Home
                                    </a>
                                </li >
                                <li className='hover:text-gray-400'>
                                    <a href='#aboutSection'>
                                        About
                                    </a>
                                </li >
                                <li className='hover:text-gray-400'>
                                    <a href='#contactSection'>
                                        Contact
                                    </a>
                                </li>
                                <li className='hover:text-gray-400'>
                                    <a href='/blog'>
                                        Blog
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className='flex items-center lg:hidden'>
                            {
                                !menuToggle &&
                                <button onClick={() => setMenuToggle(true)}>
                                    <CiMenuFries />
                                </button>
                            }
                            {
                                menuToggle &&
                                <button onClick={() => setMenuToggle(false)}>
                                    <TfiClose />
                                </button>
                            }
                        </div>
                    </div>
                    <div className='h-full'>
                        { menuToggle &&
                        <div>
                            <ul className='flex flex-col justify-between gap-[20px]'>
                                <li>
                                    <a href='/'>
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href='/about'>
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href='/contact'>
                                        Contact
                                    </a>
                                </li>
                                <li>
                                    <a href='/blog'>
                                        Blog
                                    </a>
                                </li>
                            </ul>
                        </div>
                        }
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header