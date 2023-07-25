import logo from './logo.svg';
import Person from './components/component.person';
import Products from './components/component.products';
import ProductArea from './components/component.productArea';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello</p>
        <Person name="Md Shajib" profession="Student"></Person>
        <Person></Person>
        <ProductArea></ProductArea>

      </header>
    </div>
  );
}

export default App;
