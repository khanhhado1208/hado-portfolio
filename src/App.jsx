import "./App.css";
import 'tailwindcss/tailwind.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./assets/pages/Home/home";
import About from "./assets/pages/About/about";
import Contact from "./assets/pages/Contact/contact";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    
      <div className="App">
        <Router>
          <Header/>
          <Routes>
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      </Routes>
      <Footer/>
        </Router>
      </div>
    
  );
}

export default App;
