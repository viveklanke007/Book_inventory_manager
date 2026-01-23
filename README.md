# BookSync - Book Inventory Manager

BookSync is a modern, simple, and clean web application designed to help users manage their book collections efficiently. It provides a digital space to keep track of library assets with a focus on ease of use and high-contrast design.

## 🚀 Key Features

- **Full Inventory Control**: Easily view your entire book list in a clean, numbered table.
- **Dynamic Operations**: Add new books, update existing records, or remove entries from the database.
- **Detailed Insights**: View dedicated pages for each book to read its full description and publisher info.
- **Responsive Design**: Works perfectly on both desktop computers and mobile phones.
- **Interactive UI**: Features a high-contrast light theme with smooth animations for a premium feel.

## 🛠️ Technology Stack

### **Frontend**
- **React**: The core framework for building a dynamic and interactive user interface.
- **Tailwind CSS**: Used for creating a professional, high-contrast design with a mobile-first approach.
- **React Router**: Handles smooth navigation between the inventory, adding, editing, and details views.
- **Axios**: Manages communication between the frontend and the backend API.

### **Backend**
This project utilizes **MockAPI** as a secure, cloud-based dummy backend to handle:
- **Data Persistence**: Storing and retrieving book entries reliably.
- **CRUD Operations**: Supporting all Create, Read, Update, and Delete actions through standardized REST API calls.
- **Dynamic Syncing**: Ensuring the UI always reflects the latest state of the database.

## 📂 Project Structure

- **Dashboard**: The main screen showing all registered books.
- **Management Forms**: Clean, large input interfaces for adding and editing book details.
- **API Service**: A dedicated connection layer between the React interface and the MockAPI backend.
