import React, { FC } from 'react'


///////////////////// ANOTHER ONEEEEEEEEEEEE

type UserProps =  {
    name:string;
    age:number;
    happy:boolean;
}

const User: FC<UserProps>= ({name,age,happy}) => {
  return (
    <div>
        <h1>Name : {name}</h1>
        <h2>Age : {age}</h2>
        <h3>{happy?"😄":"☹️"}</h3>
    </div>
  )
}

///////////////////////// ANOTHER ONE WITH TYPES OR INTERFACE
// type UserProps = {
//     name:string;
//     age:number;
//     happy:boolean;
// }

// interface UserProps {
//     name:string;
//     age:number;
//     happy:boolean;
// // }

// const User = ({name,age,happy}:UserProps) => {
//   return (
//     <div>
//         <h1>Name : {name}</h1>
//         <h2>Age : {age}</h2>
//         <h3>{happy?"😄":"☹️"}</h3>
//     </div>
//   )
// }

//////////////////////////////////////// ONE WAYYYYYYYYYYYYYYYY
// const User = ({name,age,happy}:{name:string,age:number,happy:boolean}) => {
//   return (
//     <div>
//         <h1>Name : {name}</h1>
//         <h2>Age : {age}</h2>
//         <h3>{happy?"😄":"☹️"}</h3>
//     </div>
//   )
// }


/////////////////////////// ANOTHER ISssssssssssssss 
// const User = (props:{name:string,age:number,happy:boolean}) => {
//   return (
//     <div>
//         <h1>Name : {props.name}</h1>
//         <h2>Age : {props.age}</h2>
//         <h3>{props.happy?"😄":"☹️"}</h3>
//     </div>
//   )
// }



export default User