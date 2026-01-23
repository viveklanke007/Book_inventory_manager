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
      console.error('Error adding book:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 page-enter">
      <div className="mb-10">
        <h1 className="text-4xl font-black text-slate-900 tracking-tighter">Add New Entry</h1>
        <p className="text-slate-500 font-bold text-sm mt-2 uppercase tracking-widest">Register a new book to the inventory</p>
      </div>
      
      <div className="card-premium p-8 md:p-12">
        <BookForm onSubmit={handleAddBook} buttonText="Register Book" />
      </div>
    </div>
  );
}

export default AddBook;
