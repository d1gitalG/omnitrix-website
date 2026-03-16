import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import HowWeDeliver from './pages/HowWeDeliver';
import Coverage from './pages/Coverage';
import About from './pages/About';
import CapabilityStatement from './pages/CapabilityStatement';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="how-we-deliver" element={<HowWeDeliver />} />
          <Route path="coverage" element={<Coverage />} />
          <Route path="about" element={<About />} />
          <Route path="capability-statement" element={<CapabilityStatement />} />
          <Route path="contact" element={<Contact />} />
          {/* Catch-all → home */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
