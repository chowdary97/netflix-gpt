import React from "react";

const tailwind = () => {
  return (
    <div className="container w-full mx-auto">
      <p className="text-center p-2">Hello world</p>
      <div className="p-2 bg-violet-200 text-center rounded-md border-2 border-violet-600 ">
        <p className="font-extrabold">a div</p>
      </div>

      {/* Layout */}
      <div className="w-10 h-10 bg-red-400 top-0 fixed"></div>
      <div className="flex justify-center flex-wrap space-x-5 mt-3 mx-auto">
        <div className="h-24 w-24 bg-blue-500 rounded-full max-md:mt-2"></div>
        <div className="h-24 w-24 bg-blue-500 rounded-full max-md:mt-2"></div>
        <div className="h-24 w-24 bg-blue-500 rounded-full max-md:mt-2"></div>
      </div>
      <div className="grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 gap-2 mt-3">
        <div className="bg-violet-500 h-10 "></div>
        <div className="bg-violet-500 h-10 "></div>
        <div className="bg-violet-500 h-10 "></div>
        <div className="bg-violet-500 h-10 "></div>
        <div className="bg-violet-500 h-10 "></div>
        <div className="bg-violet-500 h-10 "></div>
      </div>
      <div className="md:block hidden">
        <p>{`I will appear for resolution > 768px`}</p>
      </div>
      <div className="max-md:block hidden">
        <p>{`I will appear for resolution < 768px`}</p>
      </div>
      <button className="px-4 py-1 bg-blue-400 rounded-md hover:bg-blue-600 text-white mt-2 focus:outline-none focus:ring focus:ring-green-300 active:bg-blue-800 ">
        Click me
      </button>
      <ul className="">
        <li className="bg-white p-2 first:bg-yellow-200 rounded-md mt-2">
          Item 1
        </li>
        <li className="bg-white p-2 first:bg-yellow-200 rounded-md odd:bg-blue-200 even:bg-green-200 mt-2">
          Item 2
        </li>
        <li className="bg-white p-2 first:bg-yellow-200 rounded-md odd:bg-blue-200 even:bg-green-200 mt-2">
          Item 2
        </li>
      </ul>
      <div className="m-6 px-6 py-8  shadow-xl ring-1 ring-slate-100 rounded-md dark:bg-black">
        <h1 className="text-slate-900 font-medium tracking-tight" >This is heading tex</h1>
        <p className="text-slate-500 mt-3" >this is paragraph text</p>
        <button className="px-3 py-1 bg-gradient-to-r from-purple-500 to-green-300 hover:from-violet-400 hover:to-pink-900 rounded-md text-sm text-slate-900 mt-8 focus:outline-none focus:ring-1 focus:ring-pruple-300 transition duration-300-ease-in-out-transform hover:scale-105 " >Toggle dark mode</button>
      </div>
    </div>
  );
};

export default tailwind;
