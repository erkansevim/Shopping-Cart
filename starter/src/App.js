import "./index.css"
import Main from "./pages/Main";
import NewProduct from "./pages/NewProduct";
import ProductList from "./pages/ProductList";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from "./pages/PageNotFound";

function App() {

  

  return (
    <div className="bg-light app">
     <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/newProduct" element={<NewProduct />} />
          <Route path="/productList" element={<ProductList />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </Router>
 
    </div>
  );
}

export default App;














