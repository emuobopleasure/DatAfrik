import React from 'react'
import { GoArrowRight } from "react-icons/go";
import { FaGithub } from "react-icons/fa";

const HeroSection = () => {
    return (
        <section id='section'>
            <div className='px-[1rem] lg:px-[4rem] text-center lg:w-[770px] mx-auto'>
                <div>
                    <h2 className='font-bold text-[30px] lg:text-[50px] text-center tracking-[0] leading-[normal] mb-[10px]'>
                        It doesn’t matter what <span className='text-[#ffff00]'>JS Framework</span> you work with.
                    </h2>
                </div>
                <div>
                    <p className='font-normal text-[16px] lg:text-[24px] text-center tracking-[0] leading-[normal] mb-[30px]'>
                        Our boilerplates works with it <span className='font-bold text-[#91d2f7]'>out-of-the-box.</span>
                    </p>
                </div>
                <div className='flex items-center gap-[20px] justify-center'>
                    <a href=''>
                        <button className='font-bold bg-[#ffff00] py-[6px] px-[16px] rounded-[3px] text-black text-[16px] tracking-[0] leading-[normal] inline-flex items-center gap-[5px]'>
                            <p>Get Started</p>
                            <GoArrowRight />
                        </button>
                    </a>
                    <a href=''>
                        <button className='font-bold text-[#ffff00] text-[16px] tracking-[0] leading-[normal] bg-black rounded-[3px] border border-solid border-[#ffff00] py-[6px] px-[26px] inline-flex items-center gap-[8px]'>
                            <p>See Repo</p>
                            <FaGithub />
                        </button>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default HeroSection