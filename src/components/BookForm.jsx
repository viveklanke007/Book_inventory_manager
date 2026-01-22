import { useState, useEffect } from 'react';

function BookForm({ initialData, onSubmit, buttonText = 'Submit' }) {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    publishedDate: '',
    publisher: '',
    overview: '',
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || '',
        author: initialData.author || '',
        publishedDate: initialData.publishedDate || '',
        publisher: initialData.publisher || '',
        overview: initialData.overview || '',
      });
    }
  }, [initialData]);

  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.author.trim()) newErrors.author = 'Author is required';
    if (!formData.publishedDate) newErrors.publishedDate = 'Published date is required';
    if (!formData.publisher.trim()) newErrors.publisher = 'Publisher is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  const inputClasses = (name) => `
    mt-1 block w-full rounded-md border-gray-300 shadow-sm 
    focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2
    ${errors[name] ? 'border-red-500' : 'border-gray-300'}
  `;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
        <div className="sm:col-span-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Book Title *
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleChange}
            className={inputClasses('title')}
          />
          {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title}</p>}
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="author" className="block text-sm font-medium text-gray-700">
            Author *
          </label>
          <input
            type="text"
            name="author"
            id="author"
            value={formData.author}
            onChange={handleChange}
            className={inputClasses('author')}
          />
          {errors.author && <p className="mt-1 text-sm text-red-600">{errors.author}</p>}
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="publishedDate" className="block text-sm font-medium text-gray-700">
            Published Date *
          </label>
          <input
            type="date"
            name="publishedDate"
            id="publishedDate"
            value={formData.publishedDate}
            onChange={handleChange}
            className={inputClasses('publishedDate')}
          />
          {errors.publishedDate && <p className="mt-1 text-sm text-red-600">{errors.publishedDate}</p>}
        </div>

        <div className="sm:col-span-6">
          <label htmlFor="publisher" className="block text-sm font-medium text-gray-700">
            Publisher *
          </label>
          <input
            type="text"
            name="publisher"
            id="publisher"
            value={formData.publisher}
            onChange={handleChange}
            className={inputClasses('publisher')}
          />
          {errors.publisher && <p className="mt-1 text-sm text-red-600">{errors.publisher}</p>}
        </div>

        <div className="sm:col-span-6">
          <label htmlFor="overview" className="block text-sm font-medium text-gray-700">
            Book Overview
          </label>
          <textarea
            id="overview"
            name="overview"
            rows={4}
            value={formData.overview}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2"
            placeholder="A brief overview of the book's content..."
          />
        </div>
      </div>

      <div className="pt-5 flex justify-end space-x-3">
        <button
          type="button"
          onClick={() => window.history.back()}
          className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
        >
          {buttonText}
        </button>
      </div>
    </form>
  );
}

export default BookForm;
