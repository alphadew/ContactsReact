import React from "react"
import user from "../Images/user.png"

const cardContact = (props) =>{
    const {id, name, email} = props.contact
    console.log("props card,", props)
    return(
        <div className="item">
            <img className="ui avatar image" src={user} alt="user"/>
            <div className="content" style={{height: "10px"}}>
                <div className="header">
                    {name}
                </div>
                <div>{email}</div>
            </div>
            <i className="trash alternate outline icon"
            style={{color: "red", marginTop: "7px", float: "right"}}
            onClick={()=>props.clickHandler(id)}
            ></i>
    
        </div>
    )
}

export default cardContact;