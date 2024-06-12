import React, { useEffect, useState } from 'react'
import axios from 'axios'
interface Student{
    id:number
    student_name:string
    email:string
    address:string
    phone:string
    state:boolean
    create_at:string
}
export default function Bai2() {
    const [students,setStudent] = useState<Student[]>([])
        const getAllStudent=()=>{
            axios.get("http://localhost:8080/studens")
            .then(response=>{
                setStudent(response.data)
            })
            .catch(err=>console.log(err))
        }
        useEffect(()=>{
            getAllStudent();
        },[])
  return (
    <div>Bài 2
        <ul>
            {students.map((item)=>{
                return <li key={item.id}>{item.student_name}</li>
            })}
        </ul>
    </div>
  )
}
