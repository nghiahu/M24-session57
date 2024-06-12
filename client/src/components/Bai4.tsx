import React from 'react'
import axios from 'axios'
export default function Bai4() {
    const removeById=()=>{
        axios.delete("http://localhost:8080/studens/5")


        axios.get("http://localhost:8080/studens")
        .then(response=>console.log("sau khi xóa",response.data))
    }
    removeById();
  return (
    <div>Bai4</div>
  )
}
