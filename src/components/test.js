import * as React from "react";

function MyComponent(props) {
  return (
    <div className="flex flex-col items-center px-16 py-12 text-xl font-light text-center whitespace-nowrap bg-black text-neutral-500 max-md:px-5">
      <div className="self-start mt-9 text-4xl font-bold text-white max-md:max-w-full">
        Contact
      </div>
      <div className="mt-9 text-base font-bold text-white">
        Fill out this form to reach us.
      </div>
      <div className="flex gap-3 mt-6 max-w-full w-[599px] max-md:flex-wrap">
        <div className="grow justify-center items-start py-4 pr-16 pl-4 bg-zinc-300 max-md:pr-5">
          First name
        </div>
        <div className="grow justify-center items-start py-4 pr-16 pl-3.5 bg-zinc-300 max-md:pr-5">
          Last name
        </div>
      </div>
      <div className="justify-center items-start py-4 pr-16 pl-4 mt-9 max-w-full bg-zinc-300 w-[604px] max-md:pr-5">
        Email
      </div>
      <div className="justify-center items-start py-3.5 pr-16 pl-4 mt-9 max-w-full bg-zinc-300 w-[604px] max-md:pr-5">
        Phone (optional)
      </div>
      <div className="items-start pt-4 pr-16 pb-24 pl-4 mt-9 max-w-full bg-zinc-300 w-[604px] max-md:pr-5 max-md:pb-10">
        Message
      </div>
      <div className="justify-center items-center px-16 py-4 mt-4 max-w-full text-2xl font-bold bg-blue-300 text-slate-900 w-[250px] max-md:px-5">
        Send
      </div>
    </div>
  );
}


