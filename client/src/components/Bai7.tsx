import axios from 'axios'
import React, { useEffect, useState } from 'react'
interface Student{
    id:number
    student_name:string
    email:string
    address:string
    phone:string
    state:boolean
    create_at:string
}
export default function Bai7() {
    const useEffect=()=>{
        const [students,setStudent] = useState<Student[]>([])
        axios.get("http://localhost:8080/studens")
        .then(res=>setStudent(res.data))
    }
  return (
    <div>Bai7
        <table>
            <div>
                <div>Quản lý sinh viên</div>
            </div>
        </table>
    </div>
  )
}
