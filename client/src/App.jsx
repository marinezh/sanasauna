import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./components/About";
import Allwords from "./components/Allwords";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Layout from "./pages/Layout";
import FlipCards from "./components/cardsNavigation/FlipCards";
import WordsList from "./components/cardsNavigation/WordsList";
import Test from "./components/cardsNavigation/Test";
import Games from "./components/cardsNavigation/Games";
import CategoryDetails from "./components/CategoryDetails/CategoryDetails";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="allwords/*" element={<Allwords />}>
            <Route path="flipcards" element={<FlipCards/>} />
            <Route path="wordslist" element={<WordsList/>} />
            <Route path="test" element={<Test />} />
            <Route path="game" element={<Games />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path=":categoryName/quiz" element={<CategoryDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
