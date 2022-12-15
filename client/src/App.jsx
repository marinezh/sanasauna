import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./components/About";
import Allwords from "./components/Allwords";
import Home from "./components/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup";
import TopicPage from "./components/TopicPage";
import Layout from "./pages/Layout";
import WordsList from "./components/cardsNavigation/WordsList";
import Games from "./components/cardsNavigation/Games";
import CategoryDetailsQuiz from "./components/CategoryDetails/CategoryDetailsQuiz";
import CategoryDetailsFlipCards from "./components/CategoryDetails/CategoryDetailsFlipCards";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="allwords/*" element={<Allwords />}></Route>
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path=":categoryName/*" element={<TopicPage />}>
            <Route path="flipcards" element={<CategoryDetailsFlipCards />} />
            <Route path="wordslist" element={<WordsList />} />
            <Route path="test" element={<CategoryDetailsQuiz />} />
            <Route path="game" element={<Games />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
