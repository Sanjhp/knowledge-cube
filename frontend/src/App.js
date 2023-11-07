import "./App.css";
import CourseCollection from "./pages/CourseCategories/CourseCollection";
import AllCourses from "./pages/AllCourses";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Course from "./pages/UploadCourse/UploadCourse";
import Updateprofile from "./pages/UpdateProfile/Updateprofile";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";
import LearnerDashboard from "./pages/LearnerDashboard";
import CreaterDashboard from "./pages/CreaterDashboard";
import EditCourse from "./pages/EditCourse";
import PrivateMessaging from "./pages/PrivateMessaging";
import Chapter from "./pages/UploadCourse/UploadChapterByCourse";
import LearnerCourseDetailsPage from "./pages/LearnerCourseDetailsPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UpdateCourse from "./pages/UpdateCourse/UpdateCourse";
import UpdateChapter from "./pages/UpdateCourse/UpdateChapters";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route exact path="/upload-course" element={<Course />} />

        <Route
          exact
          path="/update-course/:courseId"
          element={<UpdateCourse />}
        />
        <Route
          exact
          path="/update-chapter/:courseId"
          element={<UpdateChapter />}
        />
        <Route exact path="/chapter-upload/:courseId" element={<Chapter />} />
        <Route exact path="/all-courses" element={<AllCourses />} />
        <Route exact path="/course-collection" element={<CourseCollection />} />
        <Route exact path="/learner-dashboard" element={<LearnerDashboard />} />
        <Route exact path="/creator-dashboard" element={<CreaterDashboard />} />
        <Route exact path="/login" element={<Signin />} />
        <Route exact path="/register" element={<Signup />} />
        <Route exact path="/profile-update" element={<Updateprofile />} />
        <Route exact path="/forget-password" element={<ForgetPassword />} />
        <Route exact path="/reset-password" element={<ResetPassword />} />
        <Route exact path="/edit-course" element={<EditCourse />} />
        <Route exact path="/community-chat" element={<PrivateMessaging />} />
        <Route
          exact
          path="/learner-course-details-page/:courseId"
          element={<LearnerCourseDetailsPage />}
        />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}
export default App;
