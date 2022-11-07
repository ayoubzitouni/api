import axios from 'axios'
import React, { useEffect, useState } from 'react'
import User from './User'

const Userlist = () => {
    const [data,setData] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then(res=>
        
        setData(res.data)
        )
        console.log(data)
    })
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        {data.map(el=><User data={el}/>)}
    </div>
  )
}

export default Userlist