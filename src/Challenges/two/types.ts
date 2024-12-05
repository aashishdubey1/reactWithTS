

//////////////// With Interfaces
// interface Info  {
//     id:number;
//     name:string;
//     email:string;
// }

// interface AdminInfo extends Info  {
//     canKick:boolean;
//     canBan:boolean;
//     owner:boolean;
// }

//////////////////// WITH TYPES

type Info = {
    id:number;
    name:string;
    email:string;
}

type AdminInfo = Info & {
    canKick:boolean;
    canBan:boolean;
    owner:boolean;
}


export type {Info , AdminInfo}