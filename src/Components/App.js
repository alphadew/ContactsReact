import React, { useState,useEffect } from "react";
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
    setContacts([...contacts, contact])
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
      <Header />
      <AddContact addContactHandler = {addContactHandler}/>
       <ContactList contacts = {contacts}/>
    </div>
    //getting values from child, handler, call back fun
    //passing the state to component contactlist

  );
}

export default App;
