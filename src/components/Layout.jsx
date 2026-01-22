import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

function Layout() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white shadow rounded-lg p-6 min-h-[600px]">
          <Outlet />
        </div>
      </main>
      <footer className="bg-white border-t py-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Book Inventory Management System
      </footer>
    </div>
  );
}

export default Layout;
