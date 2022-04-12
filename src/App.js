import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from "./pages/home"
import Header from "./componets/header"
import Sets from "./pages/Sets";
import Footer from "./componets/Footer"
function App() {
  return (
     <BrowserRouter> 
     <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sets" element={<Sets />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
