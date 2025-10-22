# ⚡ CipherStudio – Online React IDE

CipherStudio is a **browser-based React IDE** where users can create, edit, and preview React code instantly.
It’s built as part of the **CipherSchools Full Stack Assignment** to simulate a lightweight online coding environment like CodeSandbox.

---

## 🚀 Live Demo

* **Frontend (IDE):** [https://cipher-studio-weld.vercel.app/](https://cipher-studio-weld.vercel.app/)
* **Backend (API):** [https://cipherstudio-backend-6w2u.onrender.com](https://cipherstudio-backend-6w2u.onrender.com)

---

## 🎯 Objective

To build a full-stack browser-based React IDE that allows:

1. Creating and managing project files.
2. Writing and running React code live in the browser.
3. Saving and reloading projects from the database.

---

## 🧩 Features (MVP)

✅ **File Management** – Create and select project files dynamically
✅ **React Code Editor** – Built using Sandpack by CodeSandbox
✅ **Live Preview** – See real-time output as you code
✅ **Save Projects** – Persist project data to MongoDB
✅ **Load Projects** – Retrieve saved projects via project ID
✅ **Clean UI** – IDE layout inspired by CodeSandbox

*(Optional features like authentication, theming, or AWS were excluded to meet the short deadline.)*

---

## 🛠️ Tech Stack

| Layer          | Technology                               |
| -------------- | ---------------------------------------- |
| Frontend       | React + Vite + TailwindCSS               |
| Code Execution | Sandpack (`@codesandbox/sandpack-react`) |
| Backend        | Node.js + Express.js                     |
| Database       | MongoDB Atlas                            |
| Deployment     | Vercel (frontend), Render (backend)      |

---

## 📁 Folder Structure

```
CipherStudio/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   └── IDE.jsx
│   │   └── App.jsx
│   └── vite.config.js
│
└── backend/
    ├── models/
    │   └── Project.js
    ├── routes/
    │   └── projectRoutes.js
    └── server.js
```

---

## ⚙️ API Endpoints

| Method | Endpoint            | Description                |
| ------ | ------------------- | -------------------------- |
| `POST` | `/api/projects`     | Create or update a project |
| `GET`  | `/api/projects/:id` | Fetch project by ID        |

**Example JSON**

```json
{
  "name": "MyProject",
  "files": [
    { "filename": "App.js", "content": "export default function App(){ return <h1>Hello!</h1> }" }
  ]
}
```

---

## 💻 Local Setup (Development)

```bash
# Clone both repos
git clone <frontend-repo>
git clone <backend-repo>

# Backend setup
cd backend
npm install
create .env file with:
  PORT=5000
  MONGO_URI=your_mongo_uri
npm start

# Frontend setup
cd ../frontend
npm install
npm run dev
```

Then visit **[http://localhost:5173](http://localhost:5173)**

---

## 🧠 Acknowledgments

* **CipherSchools** for the project challenge
* **Sandpack by CodeSandbox** for providing the embedded React runtime
* **Render & Vercel** for quick free hosting

---

## 🧾 Author

**Nithin Amaraneni**
B.Tech CSE, Lovely Professional University
Frontend & Full Stack Developer

---