import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Shop from "./components/Shop";
import Cart from "./components/Cart";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
