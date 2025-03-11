import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';

import {
  Routes,
  Route,
} from "react-router-dom";
import EyeGuide from './pages/EyeGuide';

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/eyeguide" element={<EyeGuide />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App;
