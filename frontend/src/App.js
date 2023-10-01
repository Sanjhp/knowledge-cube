import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Course from "./pages/UploadCourse/UploadCourse";
import Categories from "./pages/CourseCategories/CourseCategories";
import Updateprofile from "./pages/UpdateProfile/Updateprofile";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";
// import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        {/* <Main/> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/upload-course" element={<Course />} />
          <Route exact path="/categories" element={<Categories />} />
          <Route exact path="/login" element={<Signin />} />
          <Route exact path="/register" element={<Signup />} />
          <Route exact path="/profile-update" element={<Updateprofile />} />
          <Route exact path="/forget-password" element={<ForgetPassword />} />
          <Route exact path="/reset-password" element={<ResetPassword />} />
          {/* <Route exact path="/collection" element={<Collection />} /> 
          <Route exact path="/courses" element={<Courses />} />
          <Route exact path="/features" element={<Features />} /> 
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />*/}
        </Routes>
       
      </Router>
    </>
  );
}
export default App;
