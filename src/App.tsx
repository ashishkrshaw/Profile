import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Certifications from './pages/Certifications';
import Research from './pages/Research';
import ProjectDetails from './pages/ProjectDetails';
import Experience from './pages/Experience';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/research" element={<Research />} />
        <Route path="/project/:slug" element={<ProjectDetails />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </BrowserRouter>
  );
}
