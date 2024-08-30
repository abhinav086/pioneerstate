import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import Aboutus from "./components/Aboutus";
import Signup from './components/Signup';
import Login from './components/Login';
import Gallary from "./components/Gallary";
import Form from './components/Form';
import PropertiesList from './components/PropertiesList';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Router>
      <MainContent searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    </Router>
  );
}

function MainContent({ searchQuery, setSearchQuery }) {
  const location = useLocation();

  // Apply background class and hide header only for signup and login routes
  const isAuthPage = location.pathname === '/signup' || location.pathname === '/login';

  return (
    <div className={isAuthPage ? "app-container" : ""}>
      {!isAuthPage && <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />}
      <Routes>
        <Route path="/" element={<Navigate to="/signup" replace />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/gallery" element={<Gallary />} />
        <Route path="/contact" element={<Form />} />
        <Route path="/properties" element={<PropertiesList searchQuery={searchQuery} />} />
      </Routes>
    </div>
  );
}

export default App;
