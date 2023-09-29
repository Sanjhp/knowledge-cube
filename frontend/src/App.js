import {  BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Apps from './Apps.module.css';
import HeroSection from './components/HeroSection/HeroSection';
import Categories from './components/Categories/Categories';
// import courses from './assets/courses.svg'
// import expert from './assets/expert.svg';
import Courses from './components/Courses/Courses';

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

          
        </div>
        <Categories/>
        <Courses/>
      </Router>
    </>
  );
}

export default App;
