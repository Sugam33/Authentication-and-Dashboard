import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginReg from './auth/LoginReg';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Layout from './pages/Layout';

function App() {
  return (
    <div>
     <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element = {<Home />}/>
          <Route path='contact' element = {<Contact />}/>
          <Route path='login' element = {<LoginReg />}/>
          </Route> 

        <Route path='*' element = {<h1>404 NOT FOUND</h1>}/> 
     </Routes>
    </div>
  );
}

export default App;
