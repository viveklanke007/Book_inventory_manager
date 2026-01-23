import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

function Layout() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-brand-primary/10 selection:text-brand-primary">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer className="bg-white border-t border-brand-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-sm font-black text-slate-900 tracking-tighter">BookSync</span>
              <span className="text-slate-200">|</span>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Core Inventory Registry</span>
            </div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
              &copy; {new Date().getFullYear()} Modern Asset Management
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
