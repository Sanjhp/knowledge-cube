import logo from "./logo.svg";
import "./App.css";
import UploadCourse from "./pages/UploadCourse/UploadCourse";
import CourseHeader from "./pages/CourseCategories/CourseHeader";
import CourseCollection from "./pages/CourseCategories/CourseCollection";
import AllCourses from "./pages/AllCourses";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Course from "./pages/UploadCourse/UploadCourse";
import Categories from "./pages/CourseCategories/CourseCategories";
import Updateprofile from "./pages/UpdateProfile/Updateprofile";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";
import CourseOverview from "./pages/CourseOverview";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<AllCourses />}></Route> */}
      
      <Route exact path="/" element={<CourseOverview />} />
      {/* <Route exact path="/upload-course" element={<Course />} />
      <Route exact path="/categories" element={<Categories />} />
      <Route exact path="/login" element={<Signin />} />
      <Route exact path="/register" element={<Signup />} />
      <Route exact path="/profile-update" element={<Updateprofile />} />
      <Route exact path="/forget-password" element={<ForgetPassword />} />
      <Route exact path="/reset-password" element={<ResetPassword />} /> */}
      </Routes>
      {/* <Route exact path="/collection" element={<Collection />} /> 
        <Route exact path="/courses" element={<Courses />} />
        <Route exact path="/features" element={<Features />} /> 
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />*/}
      {/* <AllCourses/>  
      <UploadCourse />
      <CourseHeader />
      <CourseCollection /> */}

    </BrowserRouter>
  );
}
export default App;
