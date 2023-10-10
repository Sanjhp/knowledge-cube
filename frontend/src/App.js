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
import Features from "./components/Features/Features";
import CourseCategories from "./pages/CourseCategories/CourseCategories";
import LearnerDashboard from "./pages/LearnerDashboard";
import CreaterDashboard from "./pages/CreaterDashboard";
import Navbar from "./components/Navbar/Navbar";
import CreatorNavbar from "./components/Navbar/CreatorNavbar";
import LearnerNavbar from "./components/Navbar/LearnerNavbar";
import EditCourse from "./pages/EditCourse";
import PrivateMessaging from "./pages/PrivateMessaging";
import LearnerCourseDetailsPage from "./pages/LearnerCourseDetailsPage";
import CommunityChat from "./pages/CommunityChat";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route exact path="/upload-course" element={<Course />} />
        <Route exact path="/categories" element={<CourseCategories />} />
        <Route exact path="/all-courses" element={<AllCourses />} />
        <Route exact path="/course-collection" element={<CourseCollection />} />
        <Route exact path="/course-overview" element={<CourseOverview />} />
        <Route exact path="/learner-dashboard" element={<LearnerDashboard />} />
        <Route exact path="/creator-dashboard" element={<CreaterDashboard />} />
        <Route exact path="/login" element={<Signin />} />
        <Route exact path="/register" element={<Signup />} />
        <Route exact path="/profile-update" element={<Updateprofile />} />
        <Route exact path="/forget-password" element={<ForgetPassword />} />
        <Route exact path="/reset-password" element={<ResetPassword />} />
        <Route exact path="/edit-course" element={<EditCourse />} />
        <Route exact path="/messages" element={<PrivateMessaging />} />
        <Route exact path="/learner-course-details-page" element={<LearnerCourseDetailsPage />} />
        <Route exact path="/community-chat" element={<CommunityChat />} />

        {/* <Route exact path="/course-header" element={<CourseHeader />} /> */}
        {/* <Route exact path="/features" element={<Features />} /> */}
        {/* <Route exact path="/creator-dashboard" element={<CreaterDashboard />} />
        <Route exact path="/learner-dashboard" element={<LearnerDashboard />} />
        <Route exact path="/course-overview" element={<CourseOverview />} /> */}

        {/* <Route exact path="/collection" element={<Collection />} />  */}
        {/* <Route exact path="/courses" element={<CourseCollection />} />   */}
        {/* <Route exact path="/about" element={<About />} /> */}
        {/* <Route exact path="/contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
