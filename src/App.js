import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Page/Home';
import Experience from './Page/Experience';
import Projects from './Page/Projects';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path = "/" element={<Home />} />
          <Route path = "/home" element={<Home />} />
          <Route path = "/projects" element={<Projects />} />
          <Route path = "/experience" element={<Experience />} />

        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
