import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import Aboutus from "./components/Aboutus";
import Gallary from "./components/Gallary";
import Form from './components/Form';
import PropertiesList from './components/PropertiesList';

function App() {
  // State to hold the search query
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Router>
      {/* Pass the search query and setSearchQuery as props to Header */}
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/gallery" element={<Gallary />} />
        <Route path="/contact" element={<Form />} />
        {/* Pass the searchQuery as a prop to PropertiesList */}
        <Route path="/properties" element={<PropertiesList searchQuery={searchQuery} />} />
      </Routes>
    </Router>
  );
}

export default App;
