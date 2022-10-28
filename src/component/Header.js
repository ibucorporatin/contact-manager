import React,{useContext} from 'react'
import  '../app.css'
import { buttonContext } from './App'
export default function Header() {
  const {color,changetheme,isDark}=useContext(buttonContext)
  // console.log(color.header)
const buttonClick=(e)=>{


changetheme()
}
let a =isDark?"switch-btn slide":"switch-btn"
// console.log(a)

  return (
    <div className='ui fixed menu' {...color.header} >
        <div className='ui  container center 'style={{justifyContent:'center'}}  >
            <h2  >Contact Manager</h2> 
          <div>
            <h4 className="switch-btn1 darkName">Dark</h4>
          <button className={a} name='button' onClick={(e)=>buttonClick(e)}>
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
