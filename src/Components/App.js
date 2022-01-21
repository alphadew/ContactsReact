import React, { useState,useEffect } from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import {v4 as uuidv4} from "uuid";
import './App.css';
import Header from "./Header"
import ContactList from "./ContactList"
import ContactCards from "./ContactCards"
import AddContact from "./AddContact"


function App() {
  const LOCAL_STORAGE_KEY = "contacts"
  const [contacts, setContacts] = useState([])

 //a state to save contacts
  const addContactHandler = (contact) =>{
    console.log(contact)
    setContacts([...contacts, {id: uuidv4(), ...contact}])
    // setContacts([...contacts, contact])
  }

  const removeContactHandler = (id) =>{
    const newContactList = contacts.filter((contact) => {
      return contact.id!==id;
    })
    
    setContacts(newContactList)
  }


  useEffect(() =>{
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(retrieveContacts){
      setContacts(retrieveContacts)
    }
  },[])

  useEffect(() =>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  },[contacts])

  

  return (
    <div className="ui container">
      <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={()=> <ContactList  contacts = {contacts} getContactId = {removeContactHandler} />}/>
        <Route path="/add" component={()=> <AddContact addContactHandler = {addContactHandler} />  }/>
        
      </Switch>
      
      {/* <AddContact addContactHandler = {addContactHandler}/>
       <ContactList contacts = {contacts} getContactId = {removeContactHandler}/> */}
       </Router>
    </div>
    //getting values from child, handler, call back fun
    //passing the state to component contactlist

  );
}

export default App;
