import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
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
import Cart from "./pages/cart/Cart";
import Order from "./pages/order/Order";
import Quizzes from "./pages/quizzes/Quizzes";
import Quiz from "./pages/quiz/Quiz";
import News from "./pages/news/News";


export default function App() {
  return (
    <div className="App">
      <Header/>
      <Backtotop/>
      <Routes>
        {ScrollToTop()}
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:id" element={<Course />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/quiz/:id" element={<Quiz />} />
        <Route path="/news" element={<News />} />
        <Route path="*"  element={<NotFound/>} />
      </Routes>
      <Footer/>
    </div>
  );
}


