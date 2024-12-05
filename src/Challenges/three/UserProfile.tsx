import React, { useState } from 'react'


type User = {
    name:string;
    age:number;
    job:string;
}


const UserProfile = () => {
    const [user,setUser] = useState<User>({name:'',age:0,job:""})
  return (
    <div>
      <div>
        <input type="text" placeholder='Name' onChange={(e)=>setUser({...user,name:e.target.value})}/>
        <input type="text" placeholder='age'onChange={(e)=>setUser({...user,age:Number(e.target.value)})}/>
        <input type="text" placeholder='job' onChange={(e)=>setUser({...user,job:e.target.value})}/>
      </div>
        <div>
        <h1>User Info</h1>
        <p>Name: {user.name}</p>
        <p>Age: {user.age || ""}</p>
        <p>Job: {user.job}</p>
        </div>
    </div>
  )
}

export default UserProfile