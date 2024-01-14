import './Card.css'
import { useState} from 'react'
const Reg=()=>{
    let [data,setData]=useState({"name":"","email":"","age":""})
    let [sl,setSel]=useState("")
    let [sb,setSub]=useState("")
    let fun=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    let fun1=()=>{
     setSel(...sl)
    }
    let sub=()=>{
  setSub(...sb)
    }
    return(
        <div>
        <div className="con">
            <div className="card">
            <input type="text" placeholder="Enter Name"onChange={fun} value={data}/>
            <input type="email" placeholder="Enter email" onChange={fun} value={data}/>
            <input type="text" placeholder="Enter Age" onChange={fun} value={data}/>
            <select className='sel' onClick={fun1}>
                <option selected disabled>Select Filter</option>
                <option>Diabetes</option>
                <option>Diagonsis</option>
                <option>Fever</option>
                <option>Cold</option>
            </select>
            <button className='bt' onClick={sub}>Submit</button>
            </div>
        </div>
        </div>
    )
}
export default Reg