import { useNavigate } from 'react-router-dom';
import BookForm from '../components/BookForm';
import { addBook } from '../services/api';

function AddBook() {
  const navigate = useNavigate();

  const handleAddBook = async (bookData) => {
    try {
      await addBook(bookData);
      navigate('/');
    } catch (error) {
      alert('Failed to add book. Please try again.');
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="md:flex md:items-center md:justify-between mb-8 text-center md:text-left">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Register New Book
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Fill in the details below to add a new book to the inventory.
          </p>
        </div>
      </div>

      <div className="bg-white overflow-hidden sm:rounded-lg">
        <BookForm onSubmit={handleAddBook} buttonText="Save Book" />
      </div>
    </div>
  );
}

export default AddBook;
