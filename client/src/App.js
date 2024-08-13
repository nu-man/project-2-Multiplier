import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login.js";
import Page1 from "./components/Page1.js";
import Page2 from "./components/Page2.js";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/page1" element={<Page1 />} />
      <Route path="/page2" element={<Page2 />} />
     
    </Routes>
  </BrowserRouter>
  );
}

export default App;
