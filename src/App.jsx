import { BrowserRouter,Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Allwords from "./components/Allwords";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Layout from "./pages/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="allwords" element={<Allwords />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
