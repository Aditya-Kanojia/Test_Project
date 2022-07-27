import React from 'react'
import {Route} from 'react-router-dom';

import './ContactList.css';
import ContactDetails from './ContactDetails';



function ContactList(props) {

   const  data = props.addedDetail;
   console.log(data);
    
    // const data1 =props.addedDetail;
    // const data=[DUMMY_DATA,data1];

    console.log(props.addedDetail);

   

  return (
    <div>
        <div><h2>Contacts</h2></div>
        <div className="contact-list">
            
            {props.addedDetail.map((contact) =>{
              return(
               
                <div key={contact.id} className='contact-list-items'>
                    <h3>{contact.name}</h3>
                    <h3>{contact.contact}</h3>
                    <h4>{contact.email}</h4>
                    <button className='delete-btn' onClick={() => props.handleDelete(contact.id)}>X</button>
                    <button onClick={()=> props.handlerDetails(contact.id)}>Show Details</button>
                    
                
                </div>
                
                );
            })}

        </div>
    </div>
  )
}

export default ContactList