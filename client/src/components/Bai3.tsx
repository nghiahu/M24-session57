import React, { useEffect } from 'react'
import axios from 'axios'
export default function Bai3() {
    const getStudentById=()=>{
        axios.get("http://localhost:8080/studens/2")
        .then(response=>console.log("thông tin chi tiết",response.data))
        .catch(err=>console.log(err,"Không tìm thấy bản ghi"))
    }
    getStudentById();
  return (
    <div>Bài 3
        
    </div>
  )
}
