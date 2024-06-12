import axios from 'axios'
import React from 'react'

export default function Bai5() {
    let student={
        student_name:"Hoàng",
        email:"hoang@gmail.com",
        address:"Hồ Chí Minh",
        phone:"0921346883",
        state:true,
        create_at:"14/06/2024"
    }
    const createStudent=()=>{
        axios.post("http://localhost:8080/studens",student)

        axios.get("http://localhost:8080/studens")
        .then(response=>console.log("Sau khi thêm",response.data))
    }
    createStudent();
  return (
    <div>Bai5

    </div>
  )
}
