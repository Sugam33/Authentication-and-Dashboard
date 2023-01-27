
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginReg from './auth/LoginReg';
import ResetPassword from './auth/ResetPassword';
import SendPasswordResetEmail from './auth/SendPasswordResetEmail';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
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
          <Route path='passwordreset' element = {<SendPasswordResetEmail />}/>
          <Route path='reset' element={<ResetPassword />}/>
          </Route> 
          <Route path='dashboard' element={<Dashboard />}/>
        <Route path='*' element = {<h1>404 NOT FOUND</h1>}/> 
     </Routes>
    </div>
  );
}

export default App;
