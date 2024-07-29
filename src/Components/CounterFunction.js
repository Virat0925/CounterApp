import React from 'react'

function CounterFunction({count, setCount}) {


    

    function increaseHandler() {
      setCount(count + 1);
    }

    function decreaseHandler() {
      setCount(count - 1);
    }


    return (
      <div className="bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]">
        <button
          onClick={decreaseHandler}
          className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl">-</button>
        <div className='font-bold gap-12 text-5xl'>{count} </div>
        <button
          onClick={increaseHandler}
          className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl">+</button>
      </div>
    );
}

export default CounterFunction;



