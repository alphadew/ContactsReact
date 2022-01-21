import React from "react";
import { Link } from "react-router-dom";
import ContactCards from "./ContactCards";

const ContactList = (props) =>{
    console.log(props)

    const deleteContactHandler = (id) =>{
        props.getContactId(id)
    };

    
    const renderContactList = props.contacts.map((contact) => {
        return(
           <ContactCards contact = {contact} clickHandler={deleteContactHandler} key = {contact.id}></ContactCards>
           //passing values to contact cards, child component
        )
    })
    return (
        <div className="main">
            <h2 style={{marginTop: "6%"}}>Contact List
            <Link to="/add">
            <button className="ui button blue right">Add Contact</button>
            </Link>
           
            </h2>
            <div className="ui celled list">{renderContactList}</div>
        </div>
    )
}

export default ContactList