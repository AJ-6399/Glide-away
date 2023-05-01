
import Nav from './Components/Nav';
import {Routes,Route, BrowserRouter } from 'react-router-dom';
import Create from './admin/Create';
import Packagesview from './Components/Packagesview';
import AdminPage from './Components/AdminPage';
import Update from './admin/Update';
import Notfound from './Components/Notfound';
import Itinerary from './Components/Itinerary';
import Home from './Components/Home';

function App() {
  return (
    <div>

    <Nav />
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/packages" element={<Packagesview/>}/>
      <Route path="/create" element={<Create/>}/>
      <Route path="/dashboard" element={<AdminPage/>}/>
      <Route path="/update" element={<Update/>}/>
      <Route path="/itinerary" element={<Itinerary/>}/>
      <Route path="/*" element={<Notfound/>}/>
    </Routes>
    </BrowserRouter>
    </div>
   
  );
}

export default App;
