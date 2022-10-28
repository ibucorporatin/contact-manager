import React,{useContext} from 'react'
import  '../app.css'
import { buttonContext } from './App'
export default function Header() {
  const {color,changetheme}=useContext(buttonContext)
  // console.log(color.header)
const buttonClick=(e)=>{
console.log()
if (e.target.name==='button') {
 e.target.classList.toggle("slide")
}
else{
  e.target.parentElement.classList.toggle("slide")
 
}
changetheme()
}

  return (
    <div className='ui fixed menu' {...color.header} >
        <div className='ui  container center 'style={{justifyContent:'center'}}  >
            <h2  >Contact Manager</h2> 
          <div>
            <h4 className="switch-btn darkName">Dark</h4>
          <button className="switch-btn " name='button' onClick={(e)=>buttonClick(e)}>
        <span>
        </span>
        <span>
        </span>
        <span className="switch"></span>
      </button>
          </div>
        </div>
    </div>
  )
}
