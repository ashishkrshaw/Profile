import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Certifications from './pages/Certifications';
import Research from './pages/Research';
import ProjectDetails from './pages/ProjectDetails';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/research" element={<Research />} />
        <Route path="/project/:slug" element={<ProjectDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
