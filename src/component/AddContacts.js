import React,{useState,useEffect,useContext} from 'react'
import uuid from 'react-uuid';
import  '../app.css'
import { buttonContext } from './App';



export default function AddContacts(props) {
  const {color}=useContext(buttonContext)
  let initial={
    name:"",
    phone:"",
    email:""
  }
  const {contacts,setcontacts,isEdit,editContact}=props.value
  const [edit]=editContact
 
  const [state, setstate] = useState(initial);

 useEffect(()=>{
  if (isEdit) {
    console.log('in edit')
    console.log(edit)
    setstate(edit)
 }
 },[edit,isEdit])


  const formSubmit=(e)=>{

    e.preventDefault()
    if (isEdit) {
      console.log("are from edit")
       let editedContacts =contacts.map((contact)=>{
        if(contact.id===edit.id){
          return {id:edit.id,...state}
        }
return contact
       })
       console.log(editedContacts)
      setcontacts(editedContacts)
      setstate(initial)
    } else {
   
console.log(state)
setcontacts([...contacts,{
  id:uuid(),...state
}])
setstate(initial)
    }


  }

  
  return (
    <div id='addContact' className='ui main' style={{marginTop:"50px"}} >
      <h2>Add Contact</h2>
      <form className='ui form dddd' onSubmit={formSubmit}  >
       <div className='field' >
       <label {...color.label}  >Name: </label> <input  {...color.input}   onChange={(e)=> setstate({...state,name:e.target.value})}  value={state.name}  name='name' placeholder='Name' required />
       </div>
       <div className='field' >
       <label {...color.label} >Number: </label>  <input {...color.input} type="tel"  value={state.phone} onChange={(e)=> setstate({...state,phone:e.target.value})}  name="phone" placeholder="91+" pattern="[0-9]{10}" required />
       </div>
       <div className='field' >
       <label {...color.label}  >Email: </label> <input {...color.input} type="email" value={state.email} onChange={(e)=> setstate({...state,email:e.target.value})}    name="email" placeholder='Name@mail.com (optional)' />
       </div>
       <button style={{backgroundColor:'rgba(70, 154, 154, 0.955)'}} {...color.button} className='button ui blue' >Add</button>
      </form>
    </div>
  )
}
