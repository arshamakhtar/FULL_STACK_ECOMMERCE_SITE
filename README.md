# 🛒 eCommerce Web App

A modern, full-stack eCommerce platform with separate interfaces for **Customers** and **Admins** — designed for scalability, performance, and ease of use.

---

## 📹 Demo Previews

### 🎥 Customer Experience
https://github.com/user-attachments/assets/c72b5efa-e5fa-431c-82cd-1b3312b7e7ce


### 🎥 Admin Dashboard
https://github.com/user-attachments/assets/0c3f2eda-df76-4784-a363-25c2cff0993a

---

## ✨ Features

### 🧑‍💼 Customer Interface
- 🔍 Search and browse products with category filtering
- 🛒 Add to cart and place secure Stripe payments
- 👤 Create and manage user profiles
- 📦 Track order history and status updates
- 📱 Responsive design for all devices

### 🛠️ Admin Panel
- 📦 Add, edit, and delete products
- 📈 Visual dashboard for analytics and sales tracking
- 🧾 Full order management and history
- 👥 User management and admin control panel
- 🚚 Update real-time order statuses

---

## 🧪 Tech Stack

| Layer       | Tech Used                    |
|------------|------------------------------|
| Frontend   | React, Tailwind CSS          |
| Backend    | Node.js, CI/CD pipeline setup|
| Database   | MongoDB, Redis               |
| Auth       | JWT                          |
| Payments   | Stripe                       |
| Media      | Cloudinary (for product images)|

---

## 🚀 Getting Started

```bash
Setup .env file
PORT=5000
MONGO_URI=your_mongo_uri

UPSTASH_REDIS_URL=your_redis_url

ACCESS_TOKEN_SECRET=your_access_token_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

STRIPE_SECRET_KEY=your_stripe_secret_key
CLIENT_URL=http://localhost:5173
NODE_ENV=development
Run this app locally
npm run build
Start the app
npm run start
