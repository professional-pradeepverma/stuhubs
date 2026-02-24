# 🎓 StuHubs - Backend API

[![Node Version](https://img.shields.io/badge/Node.js-v14+-green)]()
[![License](https://img.shields.io/badge/License-ISC-blue)]()
[![Status](https://img.shields.io/badge/Status-Active%20Development-brightgreen)]()

> **StuHubs Backend** is the core API powering the student study and management platform. It provides secure authentication, PDF resource management, and administrative controls. Built with a robust Node.js and Express architecture, it ensures seamless data handling for the StuHubs ecosystem.

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Folder Structure](#-folder-structure)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [API Routes](#-api-routes)
- [Security Features](#-security-features)
- [License](#-license)

---

## ✨ Features

### 1. 🔐 Authentication System
- **JWT-based Authentication** - Secure token-based access.
- **Student & Admin Registration/Login** - Separate flows for different user types.
- **Secure Password Hashing** - Industry-standard `bcryptjs` encryption.
- **Profile Management** - Retrieve authenticated user profiles.

### 2. 📚 PDF Resource Management
- **List All PDFs** - Retrieve a comprehensive list of available study materials.
- **Search Functionality** - Search for PDFs by ID/Name.
- **Admin PDF Creation** - Authorized administrators can add new PDF resources.

### 3. 👨‍💼 Administrative Controls
- **Admin Management** - Specific routes for admin registration and profile access.
- **Content Ownership** - Restricted creation of resources to admin accounts.

---

## 🛠️ Tech Stack

### Core
```
- Node.js           - Runtime Environment
- Express.js        - Web Application Framework
- MongoDB           - NoSQL Database
- Mongoose          - MongoDB Object Modeling (ODM)
```

### Security & Utilities
```
- JWT               - Authentication & Authorization
- bcryptjs          - Password Encryption
- dotenv            - Environment Variable Management
- nodemon           - Development Server Auto-restart
```

---

## 📁 Folder Structure

```
StuHubs/
├── src/
│   ├── app.js                          # Express app configuration & middleware
│   ├── controllers/
│   │   ├── student.controller.js       # Student-related request handlers
│   │   ├── admin.controller.js         # Admin-related request handlers
│   │   └── pdf.controller.js           # PDF-related request handlers
│   ├── db/
│   │   └── db.js                       # MongoDB connection configuration
│   ├── middlewares/
│   │   └── auth.middleware.js          # JWT verification middleware
│   ├── models/
│   │   ├── student.model.js            # Student data schema
│   │   ├── admin.model.js              # Admin data schema
│   │   └── pdf.model.js                # PDF resource schema
│   ├── routes/
│   │   ├── auth.routes.js              # Student authentication endpoints
│   │   ├── admin.routes.js             # Admin authentication & actions
│   │   └── pdf.routes.js               # Public PDF access endpoints
│   ├── services/
│   │   ├── studentservice.js           # Student business logic
│   │   ├── adminservice.js             # Admin business logic
│   │   └── pdfservice.js               # PDF business logic
│   └── utils/
│       ├── comparepassword.js          # Password verification utility
│       └── generatehashedpassword.js   # Password hashing utility
├── server.js                            # Main application entry point
├── package.json                         # Dependencies & project metadata
├── .env                                 # Environment configuration (ignored)
└── .gitignore                           # Git ignore configuration
```

---

## 🚀 Installation

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** (v6 or higher)
- **MongoDB** (Local instance or Atlas connection string)

### Step-by-Step Setup

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd StuHubs
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root directory:
   ```env
   PORT=3000
   MONGO_URL=your_mongodb_connection_uri
   JWT_SECRET=your_secure_jwt_secret
   ```

4. **Start the Server**
   ```bash
   # Development mode (with nodemon)
   npm run dev

   # Production mode
   node server.js
   ```

---

## 📚 API Routes

### Authentication (Student)
- `POST /api/auth/register` - Register a new student.
- `POST /api/auth/login` - Login as a student.
- `GET /api/auth/profile` - Get current student profile (Requires JWT).

### PDF Resources
- `GET /api/pdf/` - List all PDF resources.
- `GET /api/pdf/search/:id` - Search for a specific PDF by ID.

### Admin
- `POST /api/admin/register` - Register a new admin.
- `POST /api/admin/login` - Login as an admin.
- `GET /api/admin/profile` - Get admin profile (Requires JWT).
- `POST /api/admin/createpdf` - Create a new PDF entry (Requires Admin privileges).

---

## 🔐 Security Features

- **Encrypted Passwords**: All user passwords are salted and hashed using `bcryptjs`.
- **JWT Authorization**: Protected routes use JSON Web Tokens for identity verification.
- **Environment Isolation**: Sensitive configuration is managed via `.env` files.

---

## 📄 License

This project is licensed under the **ISC License**.

---

<div align="center">
  <b>Built for students to excel academically.</b>
</div>
"# stuhubs" 
"# stuhubs" 
