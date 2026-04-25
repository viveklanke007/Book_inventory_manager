<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&height=250&color=gradient&text=BookSync&fontSize=70&animation=fadeIn&fontAlignY=38&desc=Modern%20Book%20Inventory%20Manager&descAlignY=60" width="100%" />

# 📚 BookSync

### Smart • Fast • Modern • Book Inventory Manager

<p align="center">

<img src="https://readme-typing-svg.herokuapp.com?font=Poppins&weight=600&size=28&duration=2500&pause=1000&color=00C2FF&center=true&vCenter=true&width=900&lines=Manage+Books+Effortlessly;Track+Inventory+in+Real-Time;Fast+CRUD+Operations;Modern+Responsive+UI" />

</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-Frontend-61DAFB?style=for-the-badge&logo=react"/>
  <img src="https://img.shields.io/badge/TailwindCSS-Styled-38B2AC?style=for-the-badge&logo=tailwind-css"/>
  <img src="https://img.shields.io/badge/MockAPI-Backend-orange?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Mobile-Friendly-success?style=for-the-badge"/>
</p>

<p align="center">
  <img src="https://img.shields.io/github/stars/viveklanke007/Book_inventory_manager?style=for-the-badge"/>
  <img src="https://img.shields.io/github/forks/viveklanke007/Book_inventory_manager?style=for-the-badge"/>
  <img src="https://img.shields.io/github/issues/viveklanke007/Book_inventory_manager?style=for-the-badge"/>
</p>

</div>

---

# ✨ About BookSync

BookSync is a modern **Book Inventory Management System** built for managing book collections digitally.

It provides:

📚 Inventory tracking  
➕ Add new books  
✏ Edit records  
❌ Delete entries  
📖 Detailed book information  
⚡ Real-time syncing  

A simple and powerful system with clean UI and fast performance.

---

# 🌟 Features

<div align="center">

| 🚀 Feature | 📌 Description |
|------------|----------------|
| 📚 Inventory Dashboard | View all books in one place |
| ➕ Add Books | Create new records |
| ✏ Edit Records | Update book data |
| ❌ Delete Books | Remove unwanted books |
| 📖 Book Details | Full description & publisher info |
| 🌐 API Sync | Real-time data updates |
| 📱 Responsive Design | Mobile + Desktop optimized |
| ✨ Smooth UI | Modern transitions & animations |

</div>

---

# 🏗 Architecture

```mermaid
graph TD;
    A[React Frontend] --> B[React Router]
    A --> C[Tailwind CSS]
    A --> D[Axios API]
    D --> E[MockAPI Backend]
    E --> F[Book Database]
```

---

# ⚡ Application Flow

```mermaid
flowchart LR
    A[User Action] --> B[React UI]
    B --> C[Axios Request]
    C --> D[MockAPI]
    D --> E[Database Updated]
    E --> F[UI Sync]
```

---

# 📊 CRUD Workflow

```mermaid
sequenceDiagram
    participant User
    participant Frontend
    participant API
    participant Database

    User->>Frontend: Create/Update/Delete
    Frontend->>API: Send Request
    API->>Database: Update Data
    Database-->>API: Return Response
    API-->>Frontend: Updated Data
```

---

# 🛠 Tech Stack

<div align="center">

| Technology | Purpose |
|------------|---------|
| React | Frontend UI |
| Tailwind CSS | Styling |
| React Router | Navigation |
| Axios | API Communication |
| MockAPI | Backend |

</div>

---

# 📂 Project Structure

```bash
BookSync/
│── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── routes/
│   ├── App.jsx
│   └── main.jsx
│
│── public/
│── package.json
│── README.md
```

---

# 📌 Application Pages

<div align="center">

| Page | Description |
|------|-------------|
| 📊 Dashboard | Main inventory page |
| ➕ Add Book | Add new book entries |
| ✏ Edit Book | Modify existing data |
| 📖 Book Details | View complete details |

</div>

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/viveklanke007/Book_inventory_manager.git
```

---

## Navigate to Project

```bash
cd Book_inventory_manager
```

---

## Install Dependencies

```bash
npm install
```

---

## Start Development Server

```bash
npm run dev
```

---

## Open Browser

```bash
http://localhost:5173
```

---

# 🌐 API Endpoint

```bash
https://69722c3332c6bacb12c60916.mockapi.io/api/books/
```

---

# 🔄 CRUD API Routes

```bash
GET /books
POST /books
PUT /books/:id
DELETE /books/:id
```

---

# 📈 Project Stats

```mermaid
pie
    title BookSync Features
    "Inventory Management" : 35
    "CRUD Operations" : 30
    "Responsive Design" : 20
    "UI Experience" : 15
```

---

# 🔥 Why BookSync?

✅ Clean UI  
✅ Easy CRUD Operations  
✅ Responsive Design  
✅ API Integration  
✅ Fast Performance  
✅ Simple Architecture  
✅ Easy Maintenance  

---

# 🤝 Contribution Guide

```bash
Fork → Clone → Create Branch → Code → Commit → Push → Pull Request
```

## Create Feature Branch

```bash
git checkout -b feature-name
```

## Commit Changes

```bash
git commit -m "Added feature"
```

## Push Changes

```bash
git push origin feature-name
```

---

# 👨‍💻 Author

## Vivek Lanke

GitHub:  
https://github.com/viveklanke007

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&height=120&color=gradient&section=footer"/>

## ⭐ Star this repository if you found it useful

Built with ❤️ using React + Tailwind CSS

</div>
