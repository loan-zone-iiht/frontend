import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom'

import Login from "./pages/LoginModule/index";
import Dashboards from './pages/Dashboards';


const App = () => (
  <BrowserRouter>

    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboards" element={<Dashboards />} />

      <Route
        path="*"
        element={<Navigate to="/login" />}
      />
    </Routes>
  </BrowserRouter>
)


export default App;
