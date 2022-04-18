import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom'

import Login from "./pages/LoginModule/index";
import Dashboards from './pages/Dashboards';
import ApplicationForm from './pages/ApplyForms/applicationForm';
import Home from './pages/HomePage/home';
import ApplicationFormBGV from './pages/ApplyForms/DocumentUpload';
import CalculatorPage from './pages/LoanCalculator/CalculatorPage';
import AboutUs from './pages/AboutAndContact/Aboutus';
import Contact from './pages/AboutAndContact/Contactus';


const App = () => (
  <BrowserRouter>

    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path='/contact' element={<Contact />} />
      <Route path="/apply/:id" element={<ApplicationForm />} />
      <Route path="/dashboards" element={<Dashboards />} />
      <Route path="/upload_file" element={<ApplicationFormBGV />} />
      <Route path="*" element={<Navigate to="/home" />} />
      <Route path="/calculator" element={<CalculatorPage />} />
    </Routes>
  </BrowserRouter>
)


export default App;
