import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BookForm from '../components/BookForm';
import { getBookById, updateBook } from '../services/api';

function EditBook() {
  const { id } = useParams();
  const navigate = useNavigate();
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
        setError('Failed to load book details.');
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
      alert('Failed to update book.');
    }
  };

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
        {error}
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="md:flex md:items-center md:justify-between mb-8 text-center md:text-left">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Edit Book: {book?.title}
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Update the information for this book below.
          </p>
        </div>
      </div>

      <div className="bg-white overflow-hidden sm:rounded-lg">
        <BookForm 
          initialData={book} 
          onSubmit={handleUpdate} 
          buttonText="Update Book" 
        />
      </div>
    </div>
  );
}

export default EditBook;
