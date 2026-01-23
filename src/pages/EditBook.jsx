import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BookForm from '../components/BookForm';
import { getBookById, updateBook } from '../services/api';

function EditBook() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const data = await getBookById(id);
        setBook(data);
      } catch (err) {
        console.error('Error fetching book:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchBook();
  }, [id]);

  const handleUpdate = async (updatedData) => {
    try {
      await updateBook(id, updatedData);
      navigate('/');
    } catch (err) {
      console.error('Error updating book:', err);
    }
  };

  if (loading) return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="w-12 h-12 border-4 border-slate-200 border-t-indigo-600 rounded-full animate-spin"></div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 page-enter">
      <div className="mb-10">
        <h1 className="text-4xl font-black text-slate-900 tracking-tighter">Edit Record</h1>
        <p className="text-slate-500 font-bold text-sm mt-2 uppercase tracking-widest text-indigo-600">ID: {book?.id}</p>
      </div>

      <div className="card-premium p-8 md:p-12 border-t-8 border-indigo-600">
        <BookForm 
          initialData={book} 
          onSubmit={handleUpdate} 
          buttonText="Save Changes" 
        />
      </div>
    </div>
  );
}

export default EditBook;
