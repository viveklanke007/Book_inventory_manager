import axios from 'axios';


const BASE_URL = 'https://69722c3332c6bacb12c60916.mockapi.io/api/books';

export const getBooks = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
};

export const getBookById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching book ${id}:`, error);
    throw error;
  }
};

export const addBook = async (book) => {
  try {
    const response = await axios.post(BASE_URL, book);
    return response.data;
  } catch (error) {
    console.error('Error adding book:', error);
    throw error;
  }
};

export const updateBook = async (id, updatedBook) => {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, updatedBook);
    return response.data;
  } catch (error) {
    console.error(`Error updating book ${id}:`, error);
    throw error;
  }
};

export const deleteBook = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/${id}`);
    return true;
  } catch (error) {
    console.error(`Error deleting book ${id}:`, error);
    throw error;
  }
};
