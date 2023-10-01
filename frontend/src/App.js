import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Apps from "./Apps.module.css";
import HeroSection from "./components/HeroSection/HeroSection";
import Categories from "./components/Categories/Categories";
import Reviews from './components/reviews/Reviews';
import Courses from "./components/Courses/Courses";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <div className={Apps.container}>
          <div className={Apps.cover}>
            <div className={Apps.coverOverlay}></div>
            <Navbar />
            <HeroSection />
          </div>
        </div>
        <Categories />
        <Courses />
        <Reviews />
        <Features />
        <Footer />
      </Router>
    </>
  );
}

export default App;
// {/* <Main />
//           <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/courses" element={<Courses />} />
//           <Route path="/features" element={<Features />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//         </Routes>
//           <Footer /> */}