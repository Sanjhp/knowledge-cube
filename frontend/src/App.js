import "./App.css";
import CourseCollection from "./pages/CourseCategories/CourseCollection";
import AllCourses from "./pages/AllCourses";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
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
import Cookies from "js-cookie";

function App() {
  const Role = Cookies.get("roleName");
  console.log("Role :>> ", Role);
  const isLearner = Role === "Learner";
  const isCreator = Role === "Creator";
  console.log("isLearner :>> ", isLearner);
  console.log("isCreator :>> ", isCreator);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          exact
          path="/upload-course"
          element={isCreator ? <Course /> : <Navigate to="/" />}
        />

        <Route
          exact
          path="/update-course/:courseId"
          element={isCreator ? <UpdateCourse /> : <Navigate to="/" />}
        />
        <Route
          exact
          path="/update-chapter/:courseId"
          element={isCreator ? <UpdateChapter /> : <Navigate to="/" />}
        />
        <Route
          exact
          path="/chapter-upload/:courseId"
          element={isCreator ? <Chapter /> : <Navigate to="/" />}
        />
        <Route
          exact
          path="/all-courses"
          element={isLearner ? <AllCourses /> : <Navigate to="/" />}
        />
        <Route exact path="/course-collection" element={<CourseCollection />} />
        <Route
          exact
          path="/learner-dashboard"
          element={isLearner ? <LearnerDashboard /> : <Navigate to="/" />}
        />
        <Route
          exact
          path="/creator-dashboard"
          element={isCreator ? <CreaterDashboard /> : <Navigate to="/" />}
        />
        <Route exact path="/login" element={<Signin />} />
        <Route exact path="/register" element={<Signup />} />
        <Route
          exact
          path="/profile-update"
          element={
            isCreator || isLearner ? <Updateprofile /> : <Navigate to="/" />
          }
        />
        <Route exact path="/forget-password" element={<ForgetPassword />} />
        <Route exact path="/reset-password" element={<ResetPassword />} />
        <Route
          exact
          path="/edit-course"
          element={isCreator ? <EditCourse /> : <Navigate to="/" />}
        />
        <Route
          exact
          path="/community-chat"
          element={
            isCreator || isLearner ? <PrivateMessaging /> : <Navigate to="/" />
          }
        />
        <Route
          exact
          path="/learner-course-details-page/:courseId"
          element={
            isCreator || isLearner ? (
              <LearnerCourseDetailsPage />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}
export default App;
