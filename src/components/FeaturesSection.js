import React from 'react'

const FeaturesSection = () => {
    return (
        <section>
            <div>
                <div className='px-[1rem] lg:px-[8rem] my-[15rem] text-center lg:w-[1152px] mx-auto'>
                    <div>
                        <h6 className='font-bold text-[12px] lg:text-[16px] tracking-[0] leading-[normal] mb-[30px]'>
                            Supported and backed by:
                        </h6>
                    </div>
                    <div className='font-bold text-black text-[26px] lg:text-[32px] tracking-[0] leading-[normal] grid grid-cols-2 lg:grid-cols-4 gap-[15px] mb-[30px]'>
                        <div className='bg-[#d9d9d9] py-[9px] px-[20px]'>
                            Lorem
                        </div>
                        <div className='bg-[#d9d9d9] py-[9px] px-[20px]'>
                            Ipsum
                        </div>
                        <div className='bg-[#d9d9d9] py-[9px] px-[20px]'>
                            Dolor
                        </div>
                        <div className='bg-[#d9d9d9] py-[9px] px-[20px]'>
                            Sit
                        </div>
                        <div className='bg-[#d9d9d9] py-[9px] px-[20px]'>
                            Dolor
                        </div>
                        <div className='bg-[#d9d9d9] py-[9px] px-[20px]'>
                            Sit
                        </div>
                        <div className='bg-[#d9d9d9] py-[9px] px-[20px]'>
                            Lorem
                        </div>
                        <div className='bg-[#d9d9d9] py-[9px] px-[20px]'>
                            Ipsum
                        </div>
                    </div>
                    <div>
                        <p className='font-bold text-[26px] lg:text-[32px] tracking-[0] leading-[normal]'>
                            Less code. More product.
                        </p>
                    </div>
                    <div>
                        <p className='font-normal text-[12px] lg:text-[16px] tracking-[0] leading-[normal] lg:w-[513px] mx-auto'>
                            By using our UI Kit, we make sure you only get to <span className='font-bold text-[#ffff00]'>focus more</span> on the other things that matter.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection