import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';

import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App;
