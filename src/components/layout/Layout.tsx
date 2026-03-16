import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const pageTitles: Record<string, string> = {
  '/': 'Omnitrix | Project-Managed Field Services',
  '/services': 'Services | Omnitrix',
  '/how-we-deliver': 'How We Deliver | Omnitrix',
  '/coverage': 'Coverage & Compliance | Omnitrix',
  '/about': 'About | Omnitrix',
  '/capability-statement': 'Capability Statement | Omnitrix',
  '/contact': 'Start a Project | Omnitrix',
};

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = pageTitles[pathname] ?? 'Omnitrix | Project-Managed Field Services';
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return (
    <div className="dark min-h-screen bg-black flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
