import React,{useContext} from 'react'
import user from "../images/images.png"
import { buttonContext } from './App'
import  '../app.css'


export default function ContactCard({contact}) {
  const {removeContactHandeler, editContactHandeler,color}=useContext(buttonContext)
  return (
 
    <div className="ui cards " style={{margin:"0px"} }  >
  <div className="card "  {...color.card} >
    <div className="content" >
      <img {...color.img} className="right floated mini ui image" alt='person' src={user}/>
      <div className="header" {...color.catdColor}  >
        {contact.name}
      </div>
      <div className="meta" {...color.catdColor} >
        {contact.email}
      </div>
      <div className="description" {...color.catdColor} >
      {contact.phone}
      </div>
    </div>
    <div className="extra content">
      <div className="ui two buttons">
        <div className="ui basic green button"
           onClick={()=>{
            window.scrollTo({
              left: 0,
              top: 0,
            })
            editContactHandeler(contact.id)
          }}
        >Edit</div>
       
       <div  className="ui basic red button"
         onClick={()=>{
          removeContactHandeler(contact.id)
        }}
        >Delete</div>
       
      </div>
    </div>
  </div>
</div>
    
  )
}
