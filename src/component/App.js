import React,{useState,useEffect} from 'react'

import AddContacts from './AddContacts'
import ContactList from './ContactList'
import Header from './Header'
import  '../app.css'


export  const buttonContext=React.createContext()
export  const style=React.createContext()
export default function App() {
  // state to controll app
  const [contacts, setcontacts] = useState([]);
  const [isEdit, setisEdit] = useState(false);
  const [editContact, seteditContact] = useState("");
  const [isDark, setisDark] = useState(false);

  // to retrive data from local storage it only render once
  const LOCAL_STORAGE_KEY="contacts"
  useEffect(() => {
  const retriveContact= JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  if (retriveContact) {
    setcontacts(retriveContact)
    console.log(retriveContact)
  }
}, []);


//  to store data to local storage
useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
  console.log("hello")
  setisEdit(false)
}, [contacts]);

//  delete data from local storage
const removeContactHandeler=(id)=>{
const newContactList=contacts.filter((contact)=>{
  return id !==contact.id
})
setcontacts(newContactList)
}

const editContactHandeler=(id)=>{
  console.log("edit hemdletr clicked")
   const editContact2=contacts.filter((contact)=>{
    return id === contact.id
  })
seteditContact(editContact2)

  setisEdit(true);
}
const styling={
  dark:{
    app:{style:{padding:"10px",color:"white",backgroundColor:"black",border:"2px solid rgba(70, 154, 154, 0.955)"}},
    header:{style:{backgroundColor:'black',border:"2px solid rgba(70, 154, 154, 0.955)"}},
    input:{style:{backgroundColor:'black',border:"2px solid rgba(70, 154, 154, 0.955)",color:'white'}},
    button:{style:{backgroundColor:'black',border:"2px solid rgba(70, 154, 154, 0.955)",color:'white'}},
    card:{style:{backgroundColor:'black',boxShadow:"0px 0px 0px 0px rgba(70, 154, 154, 0.955)" ,border:"2px solid rgba(70, 154, 154, 0.955)",color:'white'}},
    img:{style:{borderRadius:'50%',border:"2px solid rgba(70, 154, 154, 0.955)"}},
    catdColor:{style:{color:'white'}},
    label:{style:{color:'white'}}
  }
}
const changetheme=()=>{
setisDark(!isDark);
}
let color='';
 color= isDark&&styling.dark
 let nameClass;
 if (color==''&&contacts.length==0) {
  nameClass='white'
 } else if(color!=''&&contacts.length==0) {
  nameClass='black'
 }

  return (
    

     <div className={nameClass} style={{padding:'10px'}} {...color.app}  >
       
      <buttonContext.Provider value={{contacts,removeContactHandeler,editContactHandeler,color,changetheme}}>
      <Header/>
      <AddContacts value={{contacts,setcontacts,isEdit,editContact,styling}} />
        <ContactList />
        </buttonContext.Provider>
       
       
    </div>
    
  )
}
