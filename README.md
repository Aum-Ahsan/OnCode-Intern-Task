# Audit Company Full-Stack Project

![GitHub repo size](https://img.shields.io/github/repo-size/Aum-Ahsan/audit-company-web?style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/Aum-Ahsan/audit-company-web?style=flat-square)
![GitHub stars](https://img.shields.io/github/stars/Aum-Ahsan/audit-company-web?style=flat-square)
![License](https://img.shields.io/badge/License-Educational-blue?style=flat-square)

> A full-stack web project built as a technical evaluation task for an internship.  
> It features a dynamic website for an audit company with a secure admin panel.

---

## 📌 Table of Contents
- [Project Overview](#project-overview)
- [Folder Structure](#folder-structure)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Installation & Running](#installation--running)
- [API Endpoints](#api-endpoints)
- [License](#license)

---

## 📂 Project Overview
This project is designed to simulate a real-world audit company website.  
It includes:
- Public-facing website pages for services, insights, and company information.
- An **admin panel** for managing content dynamically.
- Secure authentication with **JWT** for admin access.

---

## 📁 Folder Structure

```text
/audit-company-web
├── /backend
│   ├── /config         # Database connection
│   ├── /controllers    # Business logic for each route
│   ├── /middleware     # Auth middleware (JWT)
│   ├── /models         # Mongoose schemas
│   ├── /routes         # API endpoints
│   └── server.js       # Entry point
├── /frontend            # Vanilla JS, HTML, CSS, Bootstrap
│   ├── /admin           # Admin panel pages
│   ├── /assets          # CSS, Images, JS scripts
│   └── index.html       # Main website
├── .env                 # Environment variables
└── package.json
```

---

## 🛠 Tech Stack

- **Frontend:** HTML5, CSS3, Bootstrap 5, Vanilla JavaScript  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB with Mongoose  
- **Security:** JWT (JSON Web Tokens), bcryptjs  

---

## ✨ Features

- **Dynamic Website:** Full audit company website with services, insights, and contact info.  
- **Admin Panel:** Secure access to manage website content and users.  
- **Authentication & Security:** JWT authentication and password hashing with bcryptjs.  
- **Responsive Design:** Mobile-first design using Bootstrap.  
- **RESTful API:** CRUD operations for services, insights, and admin management.  

---

## 📥 Installation & Running

1. **Clone the repository:**

```bash
git clone https://github.com/Aum-Ahsan/OnCode-Intern-Task.git
```

2. **Backend setup:**

```bash
cd OnCode-Intern-Task/backend
npm install
```

- Add `.env` with MongoDB URI and JWT secret.
- Start backend server:

```bash
node server.js
```

3. **Frontend setup:**

- Open `frontend/index.html` in your browser or use **Live Server** in VS Code.

---

## 🔗 API Endpoints (Overview)

| Route                  | Method | Description                     |
|------------------------|--------|---------------------------------|
| `/api/admin/login`      | POST   | Admin login with JWT            |
| `/api/services`         | GET    | Get all services                |
| `/api/services`         | POST   | Add a new service (admin only) |
| `/api/services/:id`     | PUT    | Update a service (admin only)  |
| `/api/services/:id`     | DELETE | Delete a service (admin only)  |

> More endpoints exist for insights, users, and other content management.

---

## 📄 License

This project is for **educational and portfolio purposes** only.

---

