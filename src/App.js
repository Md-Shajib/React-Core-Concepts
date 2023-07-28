import logo from './logo.svg';
import Person from './components/component.person';
import Products from './components/component.products';
import ProductArea from './components/component.productArea';
import './App.css';
import IncDec from './components/component.inc_dec';
import { useEffect, useState } from 'react';
import UserCard from './components/component.users';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello</p>
        <Person name="Md Shajib" profession="Student"></Person>
        <Person></Person>
        <ProductArea></ProductArea>
        <IncDec></IncDec>
        <Users></Users>
      </header>
    </div>
  );
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return(
    <div>
      <h3 style={{marginTop: '5rem'}}>Json User Info</h3>
      <ul style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
        {
          users.map(user => <UserCard User={user}></UserCard>)
        }
      </ul>
    </div>
  )
}

export default App;
