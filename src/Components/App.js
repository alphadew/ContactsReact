import React from "react";
import './App.css';
import Header from "./Header"
import ContactList from "./ContactList"
import ContactCards from "./ContactCards"
import AddContact from "./AddContact"

function App() {
  const contacts = [
    {
      id: "1",
      name: "Asahi",
      email: "asai@nop.com"
    },
    {
      id: "2",
      name: "Kageyama",
      email: "kag@nop.com"
    }
  ];
  return (
    <div className="ui container">
      <Header />
      <AddContact />
       <ContactList contacts = {contacts}/>
    </div>
    

  );
}

export default App;
