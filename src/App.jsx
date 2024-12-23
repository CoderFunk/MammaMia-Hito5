import NavBar from './components/NavBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Cart from './pages/Cart';
import Pizza from './pages/Pizza';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Route, Routes } from 'react-router-dom';



function App() {

  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/pizza001' element={<Pizza />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/*' element={<NotFound />} />

      </Routes>

      <Footer />
    </>
  )
}

export default App;