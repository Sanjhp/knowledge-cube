import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Routes , Route} from "react-router-dom"
import UploadCourse from './pages/UploadCourse';
import CourseHeader from './pages/CourseHeader';
import CourseCollection from './pages/CourseCollection';
import AllCourses from './pages/AllCourses';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AllCourses/>}></Route>
    </Routes>
      <UploadCourse/>
      <CourseHeader/>
      <CourseCollection/>
    </BrowserRouter>
  );
}

export default App;
