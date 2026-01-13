# URL Shortener 🔗

A **URL Shortener** is a web application that converts long, complex URLs into short, easy-to-share links.  
When a user accesses the shortened URL, they are automatically redirected to the original long URL.

This project demonstrates core backend and full-stack concepts such as routing, database storage, environment configuration, and basic system design.

---

## 🚀 Features

- Convert long URLs into short URLs
- Redirect short URLs to the original link
- Simple and clean interface
- Fast redirection
- Scalable design approach

---

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, JavaScript  
- **Backend**: Node.js, Express  
- **Database**: PostgreSQL / MongoDB  
- **Version Control**: Git & GitHub  
- **Environment Configuration**: dotenv  

---

## 📂 Project Structure

```
URL-SHORTNER/
│
├── src/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│
├── .env.example
├── package.json
├── README.md
└── server.js
```

---

## ⚙️ Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/URL-SHORTNER.git
   ```

2. Navigate to the project directory:
   ```bash
   cd URL-SHORTNER
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the project root:
   ```env
   PORT=3000
   DATABASE_URL=your_database_url
   ```

5. Start the server:
   ```bash
   npm start
   ```

---

## 🔁 How It Works

1. User submits a long URL  
2. Server generates a unique short code  
3. Short URL is stored in the database  
4. Visiting the short URL redirects to the original URL  

---

## 👤 Author

Sai Teja

---
