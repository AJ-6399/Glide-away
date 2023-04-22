
import Nav from './Components/Nav';
import {Routes,Route } from 'react-router-dom';
import Create from './admin/Create';
import Packagesview from './Components/Packagesview';
import AdminPage from './Components/AdminPage';
import Update from './admin/Update';

function App() {
  return (
    <div>
    <Nav />
    <Routes>
      <Route path="/" element={<Packagesview/>}/>
      <Route path="/create" element={<Create/>}/>
      <Route path="/dashboard" element={<AdminPage/>}/>
      <Route path="/update" element={<Update/>}/>
    </Routes>
    </div>
   
  );
}

export default App;
