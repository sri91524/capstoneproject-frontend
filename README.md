# 🛍️ Online Shopping App - Capstone Project

[![GitHub Repo stars](https://img.shields.io/github/stars/sri91524/capstoneproject-frontend)](https://github.com/sri91524/capstoneproject-frontend)

An online shopping application built as a capstone project for the RTT-60-2024 Software Engineering class. This responsive web app allows users to browse, search, manage, and shop for products — complete with cart functionality and backend CRUD operations.

---

## 🚀 Live Demo

👉 [Visit the Live Site](https://sri-react-onlineshopping.netlify.app/)

---

## 🛠️ Technologies Used

- **Frontend:** React + Vite, TailwindCSS, Heroicons  
- **API & Data:** Axios, MongoDB, Mongoose  
- **Hooks:** `useState`, `useEffect`  
- **Tools:** NewsAPI (with `.env` for API key security)

---

## 📦 Features & Functionality

### 🔍 Browsing & Search
- Search products by **category** or **keyword**
- Results update dynamically using API queries

### 🖼️ Product Display
- Clean product listing with details
- **Add to Cart** functionality from product card

### 🛒 Shopping Cart
- Add / remove / delete items from cart  
- Cart updates quantity, price, and total dynamically  
- Item count visible in the navbar

### ✏️ Product Management (Admin)
- Add, edit, or delete products  
- Form-based interface for input  
- Data stored in MongoDB via Mongoose

### 📰 News API Integration
- News articles fetched using [TheNewsAPI](https://www.thenewsapi.com/)  
- Category/keyword-based search  
- Displayed in a separate section

---

## 🧠 Architecture & Approach

- **State Management:**  
  `useState` combined with `localStorage` to persist cart data across pages

- **Component Flow:**  
  State initialized in `App.js` and passed through components:  
  `App` → `ProductPage` → `ProductList` → `Cart` → `Nav`

- **Conditional Rendering:**  
  Based on `isCartOpen` state, the cart overlay is toggled on/off

- **API Interaction:**  
  - Axios used for HTTP requests  
  - Custom interface for CRUD operations  
  - NewsAPI integrated securely via `.env`

- **Error Handling:**  
  - Robust `try...catch` blocks for API calls  
  - User feedback for invalid entries or API failures

---