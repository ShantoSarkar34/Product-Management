# Product Management

A modern **Product Management** web application built with **Next.js 13**, **MongoDB**, and **TailwindCSS**. This platform allows users to manage products, view product details, and track product data through a responsive and interactive dashboard.

---

## 🌐 Live Demo

[**Live Site**](https://product-management-site.vercel.app)

---

## 📄 Description

This project provides a complete solution for managing product information. It includes **user authentication**, **CRUD operations for products**, and an **interactive dashboard** for data visualization.

**Users can:**
- Register and log in securely.
- Add, view, and manage products.
- Access detailed product information.
- View analytics through a dashboard with charts.

---

## ⚡ Key Features

- **User Authentication:**  
  Secure signup and login using email/password with hashed passwords.

- **Product Management:**  
  Add new products with name, description, price, image, category, brand, and ratings.

- **Product Listing:**  
  Display all products in a paginated and responsive grid.

- **Product Details:**  
  View individual product details via dynamic routes (`/products/details/:id`).

- **Dashboard:**  
  Interactive dashboard with visual charts (pie chart, bar chart) for product and user data.

- **Responsive UI:**  
  Fully responsive layout using TailwindCSS and animations with Framer Motion.

- **Session Management:**  
  Uses **NextAuth.js** for secure authentication.

---

## 🛠 Tools & Technologies

- **Frontend:**  
  - Next.js 13 (App Router)  
  - React 18  
  - TailwindCSS & DaisyUI  
  - Framer Motion (animations)  
  - React-Toastify (notifications)  

- **Backend / Database:**  
  - MongoDB Atlas (cloud database)  

- **Authentication:**  
  - NextAuth.js (Credentials Provider)  
  - Bcrypt for password hashing  

- **Deployment:**  
  - Vercel for hosting  

---
## 📌 API Routes Summary
-**Method**	**Endpoint**	**Description**
-GET	 /api/product	      -Get all products from the database
-POST 	/api/product	    -Add a new product
-POST	 /api/register	    -Register a new user
-POST 	/api/login	      -Log in a user
-GET	 /api/auth/session	-Get current user session



## ✅ Setup & Installation Instructions

Follow these steps to run the project locally:

### 1. Clone the repository
```bash
git clone https://github.com/ShantoSarkar34/product-management.git
cd product-management
