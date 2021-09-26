import './App.css';
import Cart from './Components/Cart/Cart';
import Header from './Components/Header/Header';
import Teachers from './Components/Teachers/Teachers';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Teachers></Teachers>
        <Cart></Cart>
    </div>
  );
}

export default App;
