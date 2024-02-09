import React from 'react'
import { RiCopyrightFill } from "react-icons/ri";

const Footer = () => {
    return (
        <footer>
            <div className='max-w-[90rem] mx-auto'>
                <div className='px-[1rem] mt-20 pt-12'>
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center text-base lg:text-xl mt-10 lg:w-[55%] mx-auto'>
                        <div>
                            <span className="font-bold">Lorem</span>
                            <br />
                            Ipsum
                            <br />
                            Ipsum
                            <br />
                            Ipsum
                            <br />
                            Ipsum
                            <br />
                            Ipsum
                        </div>
                        <div className="flex flex-col">
                            <div>
                                <span className="font-bold">Lorem</span>
                                <br />
                                Ipsum
                                <br />
                                Ipsum
                            </div>
                            <div className="mt-6">
                                <span className="font-bold">Lorem</span>
                                <br />
                                Ipsum
                                <br />
                                Ipsum
                            </div>
                        </div>
                        <div className="self-start">
                            <span className="font-bold">Lorem</span>
                            <br />
                            Ipsum
                            <br />
                            Ipsum
                            <br />
                            Ipsum
                            <br />
                            Ipsum
                            <br />
                            Ipsum
                        </div>
                        <div className="flex flex-col">
                            <div>
                                <span className="font-bold">Lorem</span>
                                <br />
                                Ipsum
                                <br />
                                Ipsum
                                <br />
                                Ipsum
                            </div>
                            <div className="mt-4">
                                <span className="font-bold">Lorem</span>
                                <br />
                                Ipsum
                                <br />
                                Ipsum
                            </div>
                        </div>
                    </div>
                    <div className='mt-[10rem] pb-[20px]'>
                        <div className='flex items-center justify-center gap-[5px] text-sm lg:text-base'>
                            <RiCopyrightFill />
                            <p>2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer