
import Adminedit from './Adminedit';
import './App.css';
import Nav from './Components/Nav';
import Packagesview from './Components/Packagesview';

function App() {
  return (
    <div className='main-component' style={{backgroundColor:'black'}}>
    <Nav/>   
    <Adminedit/>
    <Packagesview/>
    </div>
  );
}

export default App;
