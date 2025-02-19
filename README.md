# Healthcare Backend API

## 🚀 Overview
This project is a **backend system** for a healthcare application built using **Node.js, Express.js, and PostgreSQL**. It provides secure authentication and allows managing **patients, doctors, and their assignments**.

## 🏗 Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL (via Sequelize ORM)
- **Authentication**: JWT (JSON Web Token)
- **Environment Management**: dotenv

## 📌 Features
✅ **User Authentication** (Register/Login)  
✅ **Secure JWT-based API access**  
✅ **CRUD operations for Patients & Doctors**  
✅ **Patient-Doctor Mapping**  
✅ **Error Handling & Validation**  

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```sh
git clone [https://github.com/your-username/healthcare-backend.git](https://github.com/HarshProj/WhatBytes.git)
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 4️⃣ Run Database Migrations
```sh
npx sequelize db:migrate
```

### 5️⃣ Start the Server
```sh
npm run dev
```

## 📌 API Endpoints

### 🔐 Authentication APIs
| Method | Endpoint | Description |
|--------|---------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login and get JWT token |

### 🏥 Patient Management APIs
| Method | Endpoint | Description |
|--------|---------|-------------|
| POST | `/api/patients` | Add a new patient (Auth required) |
| GET | `/api/patients` | Get all patients of the authenticated user |
| GET | `/api/patients/:id` | Get details of a specific patient |
| PUT | `/api/patients/:id` | Update patient details |
| DELETE | `/api/patients/:id` | Delete a patient record |

![image](https://github.com/user-attachments/assets/597e2975-1d99-43f2-9515-5ed9ed1c2b07)

### 👨‍⚕️ Doctor Management APIs
| Method | Endpoint | Description |
|--------|---------|-------------|
| POST | `/api/doctors` | Add a new doctor (Auth required) |
| GET | `/api/doctors` | Retrieve all doctors |
| GET | `/api/doctors/:id` | Get details of a specific doctor |
| PUT | `/api/doctors/:id` | Update doctor details |
| DELETE | `/api/doctors/:id` | Delete a doctor record |

![image](https://github.com/user-attachments/assets/98014ae3-4798-4adb-8e8c-af80923d5c0c)


### 🔗 Patient-Doctor Mapping APIs
| Method | Endpoint | Description |
|--------|---------|-------------|
| POST | `/api/mappings` | Assign a doctor to a patient |
| GET | `/api/mappings` | Get all patient-doctor mappings |
| GET | `/api/mappings/:patientId` | Get doctors assigned to a patient |
| DELETE | `/api/mappings/:id` | Remove a doctor from a patient |

## 🔥 Usage Example
### **1️⃣ Register a User**
```http
POST /api/auth/register
```
#### Request Body
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword"
}
```
#### Response
```json
{
  "message": "User registered successfully",
  "token": "your_jwt_token_here"
}
```

### **2️⃣ Add a New Doctor**
```http
POST /api/doctors
Authorization: Bearer <token>
```
#### Request Body
```json
{
  "name": "Dr. Smith",
  "specialization": "Cardiology",
  "experience": 15
}
```
#### Response
```json
{
  "id": 1,
  "name": "Dr. Smith",
  "specialization": "Cardiology",
  "experience": 15,
  "createdAt": "2025-02-17T12:00:00Z",
  "updatedAt": "2025-02-17T12:00:00Z"
}
```

## 🛠 Troubleshooting
**Issue:** `Missing script: "dev"`
- Ensure `package.json` contains:
```json
"scripts": {
  "dev": "nodemon index.js",
  "start": "node index.js"
}
```

**Issue:** `Error: secretOrPrivateKey must have a value`
- Add `JWT_SECRET` in `.env` file.

## 📜 License
This project is **open-source** under the MIT License.

---

**🚀 Happy Coding!**
