import "./App.css";
import { Route } from "react-router";
import { Routes } from "react-router";
import Mythology from "./pages/Mythology/Mythology";
import Mystery from "./pages/Mystery/Mystery";
import Technical from "./pages/Technical/Technical";
import History from "./pages/History/History";
import { Link } from "react-router-dom";
import Product_Details from "./Product Details/Product_Details";
import Navbar from "./Component/Navbar/Navbar";
function App() {
  return (
    <div className="App">
      <h3>Hint : Click the title of each book for More Details</h3>
      <Navbar />
      <Routes>
        <Route path="/mystery" element={<Mystery />} />
        <Route path="/mythology" element={<Mythology />} />
        <Route path="/history" element={<History />} />
        <Route path="/technical" element={<Technical />} />
        <Route
          path="/product/:isbn"
          element={
            <div>
              <Product_Details />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
