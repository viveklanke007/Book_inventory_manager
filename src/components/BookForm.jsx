import { useState, useEffect } from 'react';

function BookForm({ initialData, onSubmit, buttonText = 'Save Data' }) {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Required';
    if (!formData.author.trim()) newErrors.author = 'Required';
    if (!formData.publishedDate) newErrors.publishedDate = 'Required';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="md:col-span-2">
          <label className="label-standard">Book Title</label>
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter book title"
            className={`input-standard ${errors.title ? 'border-red-500' : ''}`}
          />
          {errors.title && <p className="text-red-500 text-xs font-bold mt-2 uppercase px-1">{errors.title}</p>}
        </div>

        <div>
          <label className="label-standard">Author Name</label>
          <input
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Enter author"
            className={`input-standard ${errors.author ? 'border-red-500' : ''}`}
          />
          {errors.author && <p className="text-red-500 text-xs font-bold mt-2 uppercase px-1">{errors.author}</p>}
        </div>

        <div>
          <label className="label-standard">Published Date</label>
          <input
            type="date"
            name="publishedDate"
            value={formData.publishedDate}
            onChange={handleChange}
            className={`input-standard ${errors.publishedDate ? 'border-red-500' : ''}`}
          />
          {errors.publishedDate && <p className="text-red-500 text-xs font-bold mt-2 uppercase px-1">{errors.publishedDate}</p>}
        </div>

        <div className="md:col-span-2">
          <label className="label-standard">Publisher Name</label>
          <input
            name="publisher"
            value={formData.publisher}
            onChange={handleChange}
            placeholder="Enter publisher"
            className="input-standard"
          />
        </div>

        <div className="md:col-span-2">
          <label className="label-standard">Description / Overview</label>
          <textarea
            name="overview"
            value={formData.overview}
            onChange={handleChange}
            rows={5}
            placeholder="Brief overview of the book contents"
            className="input-standard resize-none leading-relaxed"
          />
        </div>
      </div>

      <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row gap-4 justify-end">
        <button 
          type="button" 
          onClick={() => window.history.back()}
          className="px-8 py-4 text-sm font-bold text-slate-500 hover:text-slate-800 transition-colors uppercase tracking-widest order-2 sm:order-1"
        >
          Cancel
        </button>
        <button type="submit" className="px-10 py-4 bg-indigo-600 text-white rounded-xl font-bold text-sm hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/20 active:scale-[0.98] order-1 sm:order-2">
          {buttonText}
        </button>
      </div>
    </form>
  );
}

export default BookForm;
