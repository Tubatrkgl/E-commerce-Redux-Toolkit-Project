import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import PageContainer from "./container/PageContainer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Detail from "../src/pages/Detail";
import Cart from "./pages/Cart";

function App() {
  return (
    <PageContainer>
       <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products/:id" element={<Detail/>}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </Router>
    </PageContainer>
   
  );
}

export default App;
