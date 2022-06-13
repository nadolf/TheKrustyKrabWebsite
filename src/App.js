import { 
  Routes,
  Route 
} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Order from './components/Order';
import Home from './components/Home';

export default function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path='/Menu' element={<Menu/>}/>
      <Route path='/Gallery' element={<Gallery/>}/>
      <Route path='/Order' element={<Order/>}/>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </div>
  );
}

