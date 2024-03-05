import TestDashboard from "./pages/testDashboard/TestDashboard";
import UploadResult from "./pages/UploadResults/UploadResult";
import Email from "./pages/sendemail/Email";
import Batches from "./pages/Batches/Batches";
import Layout from "./components/Layout";
import Public from './components/Public';
import Login from "./features/auth/Login";
import StudentDashboard from "./pages/studentDashboard/StudentDashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

        <Route path="/" element={<Layout />}>
        <Route index element={<Public />} />
          <Route path="login" element={<Login/>}/>    
        </Route>


          <Route path="/testdashboard">
            <Route index element={<TestDashboard/>} />
            <Route index element={<Batches/>} />
            <Route path="userId" element={< UploadResult/>} />
            <Route path="email"element={<Email/>} />
          </Route>

          <Route path="/studentdashboard">
            <Route index element={<StudentDashboard/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
