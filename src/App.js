import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Todos from './components/Todos';

function App() {
  return (
    <div>
    <Navbar/>
    <Form/>
    <Todos/>
    </div>
  );
}

export default App;
