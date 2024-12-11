import React, { FormEvent, useRef, useState } from 'react'

type FormInfo = {
    name:string;
    email:string;
    password:string;
}


const Form = () => {
    const [data,setData] =  useState<FormInfo>({
        name:'',
        email:'',
        password:''
    })

    const name = useRef<HTMLInputElement>(null)
    const email = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)


    function handleSumbit(event:FormEvent<HTMLFormElement>){
        event.preventDefault();

        const nameValue = name.current!.value
        const emailValue = email.current!.value
        const passwordValue = password.current!.value

        setData({name:nameValue,email:emailValue,password:passwordValue})
    }


  return (
    <form onSubmit={handleSumbit}>
        <input type="text" placeholder='Enter Name' ref={name} />
        <input type="text" placeholder='Enter Email' ref={email} />
        <input type="text" placeholder='Enter Password' ref={password} />
        <button type='submit'>Submit</button>

        <div>
            <h1>Name: {data.name}</h1>
            <h1>Email: {data.email}</h1>
            <h1>Password: {data.password}</h1>
        </div>

    </form>
  )
}

export default Form