import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import PageContainer from "./container/PageContainer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <PageContainer>
       <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route></Route>
      </Routes>
    </Router>
    </PageContainer>
   
  );
}

export default App;
