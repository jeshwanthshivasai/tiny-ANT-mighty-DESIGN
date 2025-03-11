import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';


import './index.css';
import './App.css'
import App from './App.jsx';
import AppHome from './AdminDashboard/AppHome.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<App />} />
        <Route path="/admin-dashboard" element={<AppHome />} />
      </Routes>
    </BrowserRouter>
  </>
  // </StrictMode>
);