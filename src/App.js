import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom'

import Login from "./pages/LoginModule/index";
import Dashboards from './pages/Dashboards';
import ApplicationForm from './pages/ApplyForms/applicationForm';
import Home from './pages/Home/home';
import ApplicationFormBGV from './pages/ApplyForms/DocumentUpload';


const App = () => (
  <BrowserRouter>

    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dash" element={<Dashboards />} />
      <Route path="/apply" element={<ApplicationForm />} />
      <Route path="/dashboards" element={<Dashboards />} />
      <Route path="/upload_file" element={<ApplicationFormBGV />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  </BrowserRouter>
)


export default App;
