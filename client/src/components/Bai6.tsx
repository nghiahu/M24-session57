import axios from 'axios'
import React from 'react'

export default function Bai6() {
    let student={
        student_name:"Tiến",
        email:"hai@gmail.com",
        address:"Quảng Ninh",
        phone:"0123045322",
        state:true,
        create_at:"14/06/2024"
    }
    const updateStudentById=()=>{
        axios.put("http://localhost:8080/studens/4",student)
        .then(response=>console.log("Sau khi thay đổi",response.data))
    }
    updateStudentById();
  return (
    <div>Bai6</div>
  )
}
