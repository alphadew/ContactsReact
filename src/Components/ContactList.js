import React from "react";
import ContactCards from "./ContactCards";

const ContactList = (props) =>{
    console.log(props)
    const renderContactList = props.contacts.map((contacts) => {
        return(
           <ContactCards contacts = {contacts}></ContactCards>
        )
    })
    return (
        <div className="ui celled list"> 
         {renderContactList}
         </div>
    )
}

export default ContactList