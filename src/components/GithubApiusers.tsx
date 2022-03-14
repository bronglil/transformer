import React, { FC, useEffect, useState } from 'react'
import {http} from '../api';
import { useQuery } from 'react-query';
import {Users} from "./user";
import { plainToClass} from 'class-transformer';

interface IProps {}


export const GithubApiusers:FC<IProps> = (props) => {

    const [result, setResult] = useState("");

    const fetchUsers = async() =>{
        return await http.get('/shows?q=rick-&-morty&embed=episodes', )
    }

  const {data, isLoading} = useQuery<any>("Users", fetchUsers)

  useEffect(() =>{
    if(data && data.data){
        const res = plainToClass(Users, data.data, { excludeExtraneousValues: false });
        console.log(res);
        setResult(res.getName());
        // let user =  new Users(data.data)
        // console.log(user.getName())
    }
}, [data])

   if(isLoading){
       return <div>...Loading</div>
   }
  

  return (
    <div>
        {result}
    </div>
   )
 }
