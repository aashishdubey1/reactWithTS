import React, { useRef } from 'react'

const FocusInput = () => {
    const focus = useRef<HTMLInputElement>(null)

    function handleClick(){
        console.log('print');
        focus.current?.focus();
    }

  return (
    <div>
        <input type="text"  ref={focus}/>
        <button onClick={handleClick}>Click to Focus</button>
    </div>
  )
}

export default FocusInput