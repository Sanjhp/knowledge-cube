import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Apps from './Apps.module.css';
import HeroSection from './components/HeroSection/HeroSection';
import courses from './assets/courses.svg'
import expert from './assets/expert.svg';

function App() {
  return (
    <>
      <Router>
        <div className={Apps.container}>
          <div className={Apps.cover}>
            <div className={Apps.coverOverlay}></div>
          <Navbar />
          <HeroSection/>
          </div>

          <section>
            <div className={Apps.grid}>
              <div className={Apps.gridItem}>
                <img src={courses} alt="cor" />
                <h2>100k Online Courses</h2>

              </div>
              <div className={Apps.gridItem + ' ' + Apps.item2}>
                <img src={expert} alt="cor" />
                <h2>Expert Instruction</h2>
              </div>
              <div className={Apps.gridItem}>
                <img src={courses} alt="cor" />
                <h2>Lifetime Access</h2>
              </div>
            </div>
          </section>
        </div>
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