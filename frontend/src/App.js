import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Routes , Route} from "react-router-dom"
import UploadCourse from './pages/UploadCourse';
import CourseHeader from './pages/CourseHeader';
import CourseCollection from './pages/CourseCollection';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<CourseCollection/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
