import React from 'react'
import { Info } from './types'

const UserInfo :React.FC<Info> = ({id,name,email}) => {
  return (
    <div>
        <p>Id: {id}</p>
        <h1>Name: {name}</h1>
        <h2>Email: {email}</h2>
    </div>
  )
}

export default UserInfo