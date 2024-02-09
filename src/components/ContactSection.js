import React from 'react'

const ContactSection = () => {
    return (
        <section id='contactSection'>
            <div className='max-w-[90rem] mx-auto'>
                <div className='px-[1rem] lg:px-[6rem] py-12 mt-20'>
                    <div>
                        <h2 className='text-start mt-9 text-2xl lg:text-4xl font-bold'>
                            Contact
                        </h2>
                    </div>
                    <div>
                        <p className='mt-9 text-base text-center font-bold'>
                            Fill out this form to reach us.
                        </p>
                        <form className='mt-6 lg:w-[599px] mx-auto text-black'>
                            <div className='flex flex-col lg:flex-row gap-9 lg:gap-3'>
                                <input type='text' placeholder='Firstname' className='bg-[#D9D9D9] py-4 pr-16 pl-4 w-full' />
                                <input type='text' placeholder='Lastname' className='bg-[#D9D9D9] py-4 pr-16 pl-3.5 w-full' />
                            </div>
                            <input type='email' placeholder='Email' className='bg-[#D9D9D9] w-full py-4 pr-16 pl-4 mt-9' />
                            <input type='phone' placeholder='Phone (optional)' className='bg-[#D9D9D9] w-full py-3.5 pr-16 pl-4 mt-9' />
                            <textarea placeholder='Message' className='pt-2 pr-16 pb-24 pl-4 h-[128px] mt-9 bg-[#D9D9D9] w-full' />
                            <div className='flex justify-center'>
                                <button className='px-16 py-4 mt-4 text-2xl font-bold bg-blue-300 text-slate-900 w-[250px]'>
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection