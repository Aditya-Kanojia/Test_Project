import React, { useState } from "react";
import './AddContact.css';
import ContactList from "./ContactList";
import {Link} from 'react-router-dom';



function AddContact(props) {
    let contactDetails ;
    const [contactName,setContactName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [enteredEmail,setEmail] = useState('');
    const [btnDisabled,setBtnDisabled] =useState('true')

    console.log("I rendered");
    function nameChangeHandler(e){
      
       const name=e.target.value;
        // console.log(name);
        setContactName(name);
        // console.log(name);
    }

    function contactChangeHandler(e){
      
        setContactNumber(e.target.value);
        // console.log(contactNumber);
    }

    function emailChangeHandler(e){
        setEmail(e.target.value);
        // console.log(email);
    }
    
    function formSubmitHandler(e){
        e.preventDefault();
        
         contactDetails ={
            name: contactName,
            contact:contactNumber,
            email: enteredEmail
        };

        props.onAddContact(contactDetails);

    
        console.log(contactDetails);

        setContactName('');
        setContactNumber('');
        setEmail('');


    }

  return (
    <div className="add-contact">
      <div className="heading">
        <h1>Add Contact</h1>
      </div>
      <div>
        <form className="contact-form" onSubmit={formSubmitHandler}>

            <div className="contact-form-item">
            <label>Contact Name :</label>
            <input type="text" value ={contactName} placeholder="Enter Name" onChange={nameChangeHandler}  />
            </div>
           
           <div className="contact-form-item">
           <label>Contact No. :</label>
            <input type='number' value={contactNumber} placeholder="Enter Number" onChange={contactChangeHandler}/>
           </div>
           
           <div className="contact-form-item">
           <label>Email Id</label>
            <input type="mail" value={enteredEmail} placeholder="Enter Email"  onChange={emailChangeHandler}/>
           </div>
            
            <div className="buttons">
            <button type="submit" className="contact-form-button" >Add To Contact</button>
            <Link to='/contacts'>
            <button type="submit" >Show Contacts</button>
            </Link>
            </div>
            
        
        </form>
      </div>

      <div className="grid">
          <h1 className="heading">This is grid</h1>
          <p className="item1">functions</p>
          <p className="item2">objects</p>
          <p className="item3">prototype</p>
          <p className="item4">classes</p>
          
          </div>
      
    </div>
  );
}

export default React.memo(AddContact);
