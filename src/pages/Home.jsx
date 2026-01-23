import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getBooks, deleteBook } from '../services/api';

function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notification, setNotification] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const data = await getBooks();
      setBooks(data);
    } finally {
      setLoading(false);
    }
  };

  const notify = (msg) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleDeleteClick = (id) => {
    setConfirmDelete(id);
  };

  const confirmAction = async () => {
    try {
      await deleteBook(confirmDelete);
      setBooks(books.filter((b) => b.id !== confirmDelete));
      notify('Book deleted successfully');
    } catch (err) {
      notify('Error deleting book');
    } finally {
      setConfirmDelete(null);
    }
  };

  const cancelAction = () => {
    setConfirmDelete(null);
  };

  if (loading) return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="w-12 h-12 border-4 border-slate-200 border-t-indigo-600 rounded-full animate-spin"></div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 page-enter space-y-8">
      {notification && (
        <div className="fixed top-8 right-8 z-[100] animate-bounce">
          <div className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold shadow-2xl text-sm">
            {notification}
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row justify-between items-center gap-10 border-b-4 border-slate-200 pb-12">
        <div className="space-y-4 text-center md:text-left">
          <h1 className="text-5xl font-black text-slate-900 tracking-tighter italic">Book Inventory</h1>
        </div>
        <Link to="/add" className="px-12 py-5 bg-indigo-600 text-white rounded-2xl font-black text-sm tracking-[0.2em] uppercase hover:bg-indigo-700 shadow-2xl shadow-indigo-600/30 active:scale-95 transition-all w-full md:w-auto text-center">
          + Register New
        </Link>
      </div>

      <div className="card-premium overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-6 py-5 text-xs font-black text-slate-500 uppercase tracking-widest w-20">Sr No.</th>
                <th className="px-6 py-5 text-xs font-black text-slate-500 uppercase tracking-widest">Book Details</th>
                <th className="px-6 py-5 text-xs font-black text-slate-500 uppercase tracking-widest">Publisher</th>
                <th className="px-6 py-5 text-xs font-black text-slate-500 uppercase tracking-widest">Date</th>
                <th className="px-6 py-5 text-xs font-black text-slate-500 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {books.map((book, index) => (
                <tr key={book.id} className="hover:bg-indigo-50/30 transition-colors group">
                  <td className="px-6 py-6 font-bold text-slate-400 text-sm">
                    {String(index + 1).padStart(2, '0')}
                  </td>
                  <td className="px-6 py-6">
                    <div className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{book.title}</div>
                    <div className="text-xs font-medium text-slate-500 mt-0.5">{book.author}</div>
                  </td>
                  <td className="px-6 py-6 text-sm text-slate-600 font-medium">
                    {book.publisher}
                  </td>
                  <td className="px-6 py-6 text-sm text-slate-600 font-medium">
                    {book.publishedDate}
                  </td>
                  <td className="px-6 py-6">
                    <div className="flex justify-end gap-2">
                      <Link to={`/book/${book.id}`} className="px-4 py-2 bg-slate-100 hover:bg-indigo-600 hover:text-white rounded-lg text-xs font-bold text-slate-500 uppercase transition-all">
                        View
                      </Link>
                      <Link to={`/edit/${book.id}`} className="px-4 py-2 bg-slate-100 hover:bg-emerald-600 hover:text-white rounded-lg text-xs font-bold text-slate-500 uppercase transition-all">
                        Edit
                      </Link>
                      <button 
                        onClick={() => handleDeleteClick(book.id)}
                        className="px-4 py-2 bg-slate-100 hover:bg-rose-600 hover:text-white rounded-lg text-xs font-bold text-slate-500 uppercase transition-all"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {books.length === 0 && (
                <tr>
                  <td colSpan="5" className="px-6 py-20 text-center text-slate-400 font-bold uppercase tracking-widest italic opacity-60">
                    No books in collection
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      
      {confirmDelete && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 space-y-6 border border-slate-100">
            <div className="text-center space-y-2">
              <div className="w-16 h-16 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-black text-slate-900">Confirm Deletion</h3>
              <p className="text-slate-500 font-medium">Are you sure you want to remove this book from the database? This action cannot be undone.</p>
            </div>
            <div className="flex gap-4">
              <button 
                onClick={cancelAction}
                className="flex-1 px-6 py-4 rounded-xl font-bold bg-slate-100 text-slate-600 hover:bg-slate-200 transition-all uppercase text-xs tracking-widest"
              >
                No, Keep it
              </button>
              <button 
                onClick={confirmAction}
                className="flex-1 px-6 py-4 rounded-xl font-bold bg-rose-600 text-white hover:bg-rose-700 shadow-lg shadow-rose-600/20 transition-all uppercase text-xs tracking-widest"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
