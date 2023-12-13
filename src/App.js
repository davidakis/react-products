import logo from './allyouneedisshop.png';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <img src={logo} alt="All you need is shop" />
         <Home />
      </header>
    </div>
  );
}

export default App;
