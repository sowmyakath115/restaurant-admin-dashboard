Project Overview

The Restaurant Admin Dashboard is a full-stack web application built for restaurant owners to manage menu items, track orders, and monitor availability in real time.

This project demonstrates real-world full-stack skills including RESTful API design, MongoDB querying, React best practices, performance optimization, and production deployment.

Features Implemented
Menu Management

View all menu items

Search menu items (debounced search – 300ms)

Filter by category and availability

Add / update / delete menu items

Toggle item availability with optimistic UI updates

Orders Dashboard

View all orders with status badges

Update order status

Pagination-ready backend

Populated menu item details

Technical Highlights

RESTful APIs using Express.js

MongoDB schemas with indexing & text search

Custom React hooks (useDebounce, useFetch)

Optimistic UI state handling

Centralized API service layer

Production deployment (Render + Netlify)

🛠️ Tech Stack
Layer	Technology
Frontend	React 18 (Vite)
Backend	Node.js, Express
Database	MongoDB Atlas
Hosting	Netlify (Frontend), Render (Backend)

🗂️ Project Structure
restaurant-admin-dashboard/
├── backend/
├── frontend/
├── README.md
└── screenshots/

Environment Variables
Backend (.env)
PORT=5000
MONGODB_URI=





Deployment Links

Frontend (Netlify):
(https://your-frontend.netlify.app](https://sowmyacodes.netlify.app/)

Backend (Render):
 https://restaurant-admin-dashboard-tfg4.onrender.com/
