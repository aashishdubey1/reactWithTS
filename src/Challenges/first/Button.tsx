import React from 'react'

type BtnProps = {
    label:string;
    onclick:()=>void;
    disabled:boolean;
}



const Button: React.FC<BtnProps>= ({label,onclick,disabled}) => {
  return (
    <button onClick={onclick} disabled={disabled}>{label}</button>
  )
}

export default Button