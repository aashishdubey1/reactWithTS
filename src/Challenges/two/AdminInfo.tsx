import React from 'react'
import type { AdminInfo } from './types'

const AdminInfo: React.FC<AdminInfo> = ({name,id,email,canBan,canKick,owner}) => {
  return (
    <div>
        <p>Id: {id}</p>
        <h1>Name: {name}</h1>
        <h2>Email: {email}</h2>
        <p>Can Kick: {canKick?"turu":"False"}</p>
        <p>Can Ban: {canBan?"turu":"False"}</p>
        <p>Owner hai: {owner?"turu":"False"}</p>
    </div>
  )
}

export default AdminInfo