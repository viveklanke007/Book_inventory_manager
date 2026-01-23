import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getBookById } from '../services/api';

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const data = await getBookById(id);
        setBook(data);
      } catch (err) {
        console.error('Error fetching details:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchBook();
  }, [id]);

  if (loading) return (
    <div className="flex items-center justify-center min-h-[60vh]">
       <div className="w-12 h-12 border-4 border-slate-200 border-t-indigo-600 rounded-full animate-spin"></div>
    </div>
  );

  if (!book) return (
    <div className="max-w-xl mx-auto py-32 px-6 text-center">
      <h2 className="text-2xl font-black text-slate-800 tracking-tight">Book Not Found</h2>
      <Link to="/" className="text-indigo-600 hover:underline mt-6 inline-block font-bold uppercase text-sm tracking-widest">Back to Library</Link>
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 page-enter space-y-10">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-10 border-b-4 border-slate-200">
        <div className="space-y-4">
          <Link to="/" className="text-xs font-black text-slate-400 uppercase tracking-widest hover:text-indigo-600 transition-colors">
            &larr; Back to Inventory
          </Link>
          <h1 className="text-5xl font-black text-slate-900 leading-tight tracking-tighter">{book.title}</h1>
          <p className="text-2xl text-indigo-600 font-bold italic">— {book.author}</p>
        </div>
        <Link
          to={`/edit/${book.id}`}
          className="bg-indigo-600 text-white px-10 py-5 rounded-xl font-bold text-sm tracking-widest uppercase hover:bg-indigo-700 shadow-xl shadow-indigo-600/20 transition-all text-center"
        >
          Modify Record
        </Link>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          <div className="card-premium p-10 space-y-6">
            <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-4">Book Description</h3>
            <p className="text-xl text-slate-600 leading-relaxed italic font-serif">
              {book.overview || "No description provided for this book."}
            </p>
          </div>
        </div>

        <div className="lg:col-span-1 space-y-10">
          <div className="card-premium p-8 bg-indigo-600 text-white shadow-2xl shadow-indigo-600/30 border-none">
            <h3 className="text-xs font-black text-white/60 uppercase tracking-wider mb-8">Asset Information</h3>
            <div className="space-y-8">
              <div>
                <span className="text-[10px] text-white/40 font-black uppercase tracking-widest block mb-1">Publisher</span>
                <p className="text-xl font-black italic underline underline-offset-4 decoration-white/20">{book.publisher}</p>
              </div>
              <div>
                <span className="text-[10px] text-white/40 font-black uppercase tracking-widest block mb-1">Date Published</span>
                <p className="text-3xl font-black italic leading-none">{book.publishedDate}</p>
              </div>
              <div className="pt-8 border-t border-white/10 text-[10px] font-black uppercase tracking-widest text-white/60">
                Database Entry ID: {book.id}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
