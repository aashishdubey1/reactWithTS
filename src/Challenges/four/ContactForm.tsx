import React, { FormEvent, useRef, useState } from 'react'

interface ContactInfo {
    name:string;
    email:string;
}


const ContactForm = () => {

    const [data,setData] = useState<ContactInfo>({name:'',email:''})

    const name = useRef<HTMLInputElement>(null)
    const email = useRef<HTMLInputElement>(null)


    function handleSubmit(e:FormEvent<HTMLFormElement>){
        e.preventDefault();
        setData({name:name.current!.value,email:email.current!.value})
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Name</label>
                <input ref={name} type="text" placeholder='Aashish' className='border-2 border-black'/>
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input ref={email} type="email" placeholder='Aashish@gmail.com' className='border-2 border-black'/>  
            </div>
            <button type='submit' className='border-2 border-black'>Submit</button>
        </form>
        <h1>Details</h1>
        <p>name :{data && data.name}</p>
        <p>email: {data && data.email}</p>
    </div>
  )
}

export default ContactForm