import logo from './logo.svg';
import './App.css';

function App() {
  let style = {
    fontWeight: '600',
    color: '#bdc3c7',
    backgroundColor: '#2a2a2a',
    padding: '10px 15px',
    borderRadius: '8px',
    boxShadow: '5px 5px 10px rgb(74, 71, 71)'
  }
  let person = {
    name: "Md Shajib",
    profession: "Student"
  }
  let person2 = {
    name: "Md Jamil",
    profession: "Student"
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h2>First Heading: Hi {person.name + "-" + person.profession} </h2>
          <h3 style={style}>Name: {person2.name + "-" + person2.profession}</h3>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
