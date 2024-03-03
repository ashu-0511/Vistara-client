import './App.css';
import Home from './Home/Home';
import Header from './Header/Header';
import Login from './Login/Login';
import Manage from './Manage/Manage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Footer/Footer';
import Flight from './Flights/Flight';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Manage' element={<Manage />} />
          <Route path='/Flight' element={<Flight />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
