import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Routes , Route} from "react-router-dom"
import UploadCourse from './pages/UploadCourse';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<UploadCourse/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
