import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom'

import Login from "./pages/LoginModule/index";
import Dashboards from './pages/Dashboards';
import ApplicationForm from './pages/ApplyForms/applicationForm';


const App = () => (
  <BrowserRouter>

    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dash" element={<Dashboards />} />
      <Route path="/apply" element={<ApplicationForm />} />

      <Route
        path="*"
        element={<Navigate to="/login" />}
      />
    </Routes>
  </BrowserRouter>
)


export default App;
