import React,{useContext} from 'react'
import { buttonContext } from './App'
import ContactCard from './ContactCard'

export default function ContactList() {
  const{contacts}=useContext(buttonContext)
  // const {contacts,removeContactHandeler,editContactHandeler}=props.value
  const renderContactList=contacts.map((contact)=>{
    return(
<ContactCard contact={contact} key={contact.id} />
    )
  })
  return (
    <div className='ui celled list' style={{display:"flex",flexWrap:'wrap',justifyContent:'center',margin:"0px",marginTop:"15px"}} >{renderContactList}</div>
  )
}
