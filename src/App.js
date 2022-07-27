
import { useEffect, useState } from 'react';
import './App.css';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import Counter from './Counter';
import DummyData from './components/DummyData';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ContactDetails from './components/ContactDetails';



function App() {

  const  [newDetail,setNewDetail] =useState(DummyData)
  

 function deleteHandler(id){
    console.log('App', id);
    if(window.confirm('Are you sure')){
    setNewDetail(newDetail.filter((item)=> item.id != id))
  }
 }


  let contactDetails;
 function addContactHandler(contactDetails){
      const contactDetail ={
        ...contactDetails,
        id: Math.random().toString()
      }

      console.log(contactDetail);
      setNewDetail((prevState) => {
         return [contactDetail,...prevState];
      })
  }

  const id = [...newDetail].map((item)=> {
    return item.id
  })
  console.log(id);
  let details;
    function detailHandler (id){

    let details=newDetail.map((item) =>{
      if (item.id===id){
        return item; 
      }else{
        return null;
      }
  });
          
  }
  console.log(details);
  
 

  return (
    <div className="App">
      
      <Router>
      <Switch>
        <Route exact path='/'>
        <AddContact onAddContact={addContactHandler} />
        </Route>
        <Route path='/contacts'>
        <ContactList addedDetail={newDetail} handlerDetails={detailHandler}  handleDelete={deleteHandler}/>
        </Route>
        <Route path='/contacts/contactdetails/:id'>
          <ContactDetails />                
        </Route> 
    
      </Switch>


      </Router>
    
       
       
       {/* <Counter/> */}
    
    </div>
  );
}

export default App;
