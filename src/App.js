
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Arif></Arif>
      
      
    </div>
  );
}
function Arif (){
  
    const [users, setUsers]=useState([]);
    useEffect( ()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res=>res.json())
      .then(data=>setUsers(data))
    },[])

  
   return (
    <div>
      
      {
        users.map(user => <User name={user.name} email={user.email}></User> )
      }
    </div>
  )
}
function User(props){
  return(
    <div>
      <h2> Name : {props.name}</h2>
      <p>Email {props.email}</p>

    </div>
  )
}


export default App;
