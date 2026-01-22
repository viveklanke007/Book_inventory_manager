import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AddBook from './pages/AddBook';
import EditBook from './pages/EditBook';
import BookDetails from './pages/BookDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="add" element={<AddBook />} />
          <Route path="edit/:id" element={<EditBook />} />
          <Route path="book/:id" element={<BookDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
