import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Home from './Pages/Home.jsx';
import Team from './Pages/Team.jsx';
import Task from './Pages/Task';
import Vip from './Pages/Vip';
import Me from './Pages/Me';
import Account from './Pages/Account.jsx';
import Recharge from './Components/Recharge.jsx';
import Withdraw from './Components/Withdraw.jsx';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path='team' element={<Team />} />
      <Route path='task' element={<Task />} />
      <Route path='vip' element={<Vip />} />
      <Route path='me' element={<Me />} />
      <Route path='recharge' element={<Recharge />} />
      <Route path='withdraw' element={<Withdraw />} />
      <Route path='account' element={<Account />}>
      </Route>
    </Route>
  </Routes>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <AppRoutes />
    </Router>
  </React.StrictMode>
);
