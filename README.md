
# 🐶 AdoptionSystem API

This project was created with the goal of learning how an **HTTP server with Fastify** works and practicing **CRUD operations** using **in-memory storage**.

---

## ✅ Technologies and Concepts Used

### 🚀 Node.js (ES Modules)

* Use of `import`/`export`
* `package.json` with `“type”: “module”`

### ⚡ Fastify

* Creating an HTTP server
* Defining routes (`GET, POST, PUT, DELETE`)
* Using `server.register()` with prefix
* Sending responses with `reply.send()` and `reply.status()`

### 🧠 Organized architecture

* Separation into layers:

* `server.js` → initializes the server
* `routes/` → defines endpoints
* `controllers/` → route logic
* `database/` → in-memory database simulation

### 🗂 Map as database

* In-memory storage with `Map`
* ID generation with `randomUUID()`
* Methods: create, list, update, delete

### ✅ Basic input validation

* Checking required fields in `POST` and `PUT`
* Return of `400 Bad Request` when data is incomplete

### 🧹 Best practices applied

* Clean and modular code
* Use of constants (`const`)
* No logic in `server.js`
* Correct HTTP returns (201, 200, 204, 400)

---

## 🎯 What we learned

✅ How to create a server with Fastify

✅ How to create and register routes in an organized way

✅ How to structure a real Node.js project (layered architecture)

✅ How to manipulate data with `Map` (as if it were a mini database)

✅ How to create and consume RESTful endpoints

✅ How to validate data received in the request body

✅ How to separate responsibilities between server, routes, controllers, and database

✅ How to use ES Modules in Node (`import/export`)

✅ How to generate unique IDs with `randomUUID`

---

## 📁 Project Structure

```
AdoptionSystem/
├── server.js
├── routes/
│   └── animal.routes.js
├── controllers/
│   └── animal.controller.js
├── database/
│   └── database-memory.js
├── package.json
├── routes.http
└── README.md
```

---

## ▶️ How to run the project

### 1. Install dependencies

```bash
npm install
```

### 2. Run in development mode (with automatic reload)

```bash
npm run dev
```

### 3. Or run normally

```bash
npm start
```

The server will start at:

```
http://localhost:3031
```

---

## 🔄 API routes

| Method | Route        | Description              |
| ------ | ----------- | ---------------------- |
| GET    | /animal     | List all animals |
| POST   | /animal     | Create a new animal    |
| PUT    | /animal/:id | Update an animal     |
| DELETE | /animal/:id | Delete an animal       |
