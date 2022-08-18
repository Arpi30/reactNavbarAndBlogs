import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Layout} from './components/navbar/Layout';
import {Home} from './components/navbar/home';
import {Contact} from './components/navbar/contact';
import {Login} from './components/navbar/login'



function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='home' element={<Home />} />
            <Route path='contact' element={<Contact />} />
            <Route index element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
