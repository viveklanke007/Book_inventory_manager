import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="border-b-2 border-slate-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-600/20">
            <span className="text-white font-black text-xl">B</span>
          </div>
          <Link to="/" className="text-xl font-black tracking-tighter text-slate-900 px-1 hover:text-indigo-600 transition-colors">
            BookSync <span className="text-indigo-600">.</span>
          </Link>
        </div>
        
        <div className="flex items-center gap-2">
          <Link 
            to="/" 
            className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
              isActive('/') ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100'
            }`}
          >
            Inventory
          </Link>
          <Link 
            to="/add" 
            className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
              isActive('/add') ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100'
            }`}
          >
            Create
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
