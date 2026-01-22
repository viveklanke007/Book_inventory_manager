import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getBookById } from '../services/api';

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const data = await getBookById(id);
        setBook(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch book details.');
        setLoading(false);
      }
    };
    fetchBook();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 p-4 rounded-md text-red-700">
        {error} <Link to="/" className="text-blue-600 underline ml-2">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-6">
      <div className="mb-6">
        <Link to="/" className="text-sm font-medium text-blue-600 hover:text-blue-500 transition-colors">
          &larr; Back to Inventory
        </Link>
      </div>

      <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-lg">
        <div className="px-6 py-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-100">
          <h3 className="text-3xl font-extrabold text-gray-900 mb-2">
            {book.title}
          </h3>
          <p className="text-lg text-blue-600 font-medium italic">
            by {book.author}
          </p>
        </div>
        
        <div className="px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="space-y-1">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Publisher</span>
              <p className="text-gray-900 font-semibold text-lg">{book.publisher}</p>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Published Date</span>
              <p className="text-gray-900 font-semibold text-lg">{book.publishedDate}</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Book Overview</h4>
            <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
              {book.overview || "No overview available for this book."}
            </p>
          </div>
        </div>

        <div className="px-6 py-6 bg-gray-50 border-t border-gray-100 flex justify-end items-center space-x-4">
           <Link
            to={`/edit/${book.id}`}
            className="inline-flex justify-center py-2.5 px-8 border border-transparent shadow-sm text-sm font-bold rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 transform hover:-translate-y-0.5"
          >
            Edit Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
