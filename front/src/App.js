import { Routes, Route } from "react-router-dom";
import Backtotop from "./components/backtotop/Backtotop";
import Header from './blocks/header/Header';
import Footer from './blocks/footer/Footer';
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Articles from "./pages/articles/Articles";
import Article from "./pages/article/Article";
import Faq from "./pages/faq/Faq";
import NotFound from "./pages/404/NotFound";
import Courses from "./pages/courses/Courses";
import Course from "./pages/course/Course";

function App() {
  return (
    <div className="App">
      <Header/>
      <Backtotop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/article" element={<Article />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course" element={<Course />} />
        <Route path="*"  element={<NotFound/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
