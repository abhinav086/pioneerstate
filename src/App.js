import { BrowserRouter as Router , Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Aboutus from "./components/Aboutus";
import Gallary from "./components/Gallary";
import Contact from "./components/Contact";

function App() {
  
  return (

   <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/aboutus" element={<Aboutus/>}/>
      <Route path="/gallery" element={<Gallary/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
   </Router>
 
  );
}

export default App;
