 🤖 Gemini Chatbot with React, Vite & Tailwind

This is a responsive and lightweight AI chatbot built using **React**, styled with **Tailwind CSS**, and powered by the **Gemini 1.5 Flash API** from Google. The project leverages **Vite** for a fast development experience and includes smooth loading animations and a clean chat interface.

---

## 🚀 Live Demo

👉 [https://solutionbot.netlify.app/]

---

## 📌 Key Features

-  **Gemini API integration**: Uses Gemini 1.5 Flash API to generate conversational responses.
-  **Real-time chat interface**: Type and get instant AI responses.
-  **Vite-powered**: Ultra-fast bundling and HMR.
-  **Tailwind CSS styling**: Clean and mobile-responsive UI.
-  **Loading animations**: Uses `react-spinners` for better user experience.
-  **Keyboard accessibility**: Press "Enter" to submit questions.
-  **Fully responsive**: Works seamlessly across all screen sizes.

---

## 🛠 Tech Stack

| Technology     | Purpose                     |
|----------------|-----------------------------|
| React          | Frontend library             |
| Vite           | Build tool & dev server      |
| Tailwind CSS   | Utility-first CSS framework  |
| Axios          | API requests                 |
| React Spinners | Loading animations           |
| Gemini API     | AI content generation        |

---

## 📂 Project Structure
----
## 🔑 Using the Gemini API

This chatbot connects to the following endpoint:

https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyBi0kkmNZyRkDp2StGkOCGdn7DXakyspyo

### 🔐 How to use your own API key:

1. Visit [Google AI Studio](https://ai.google.dev/)
2. Generate an API Key from your project.
3. In `Chatbot.jsx`, replace this line:

```js
const API_KEY = "AIzaSyBi0kkmNZyRkDp2StGkOCGdn7DXakyspyo";

How to Run Locally

1. Clone the repo
git clone https://github.com/mohammedhassan0199/AiChatApp.git

2. Install dependencies
npm install

3. Start the dev server
npm run dev
