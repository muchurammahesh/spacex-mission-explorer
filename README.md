# 🚀 SpaceX Mission Explorer  

[![GitHub Stars](https://img.shields.io/github/stars/muchurammahesh/spacex-mission-explorer?style=flat&logo=github)](https://github.com/muchurammahesh/spacex-mission-explorer/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/muchurammahesh/spacex-mission-explorer?style=flat&logo=github)](https://github.com/muchurammahesh/spacex-mission-explorer/network/members)
[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR_NETLIFY_BADGE/deploy-status)](https://spacex-mission-explorer-mahesh.netlify.app)

A *React + Vite* web application to explore *SpaceX missions* with powerful *search, filters, favorites, and detailed mission views*.  
Designed with *modern UI/UX*, responsive design, accessibility, and performance optimizations.  



![App Screenshot] <img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/235d57ee-d51a-4463-8276-0508fd2eae29" />



🌐 [*Live Demo*](https://spacex-mission-explorer-mahesh-m.netlify.app/)  

---

## ✨ Key Features  

- 📋 *Browse Missions* – Explore all SpaceX launches with mission name, date, rocket, and status.  
- 🔎 *Search & Filters* –  
  - Search by mission name (debounced)  
  - Filter by year  
  - Success-only toggle  
  - Favorites-only toggle  
- ⭐ *Favorites* – Mark/unmark launches as favorites (persisted in localStorage).  
- 📄 *Details View* – Modal with mission patch, description, rocket name, and external links (Wikipedia, Webcast).  
- ⏳ *Resilience* –  
  - Loading skeletons  
  - Empty state handling  
  - Error handling with fallback UI  
- 📱 *Responsive & Accessible* –  
  - Mobile-first responsive grid (1–5 columns)  
  - Semantic HTML + ARIA labels for accessibility  
  - Keyboard-friendly navigation  
- 🌙 *Dark Mode* – Toggle between light and dark themes.  

---

## 🛠 Tech Stack  

| Tech | Badge |
|------|-------|
| ⚛ React 18 | <img src="https://img.shields.io/badge/React-18-blue?logo=react" alt="React" /> |
| ⚡ Vite | <img src="https://img.shields.io/badge/Vite-B73BFE?logo=vite&logoColor=FFD62E" alt="Vite" /> |
| 🧭 React Router | <img src="https://img.shields.io/badge/React%20Router-CA4245?logo=react-router&logoColor=fff" alt="React Router" /> |
| 📦 Context API | <img src="https://img.shields.io/badge/Context%20API-61DAFB?logo=react" alt="Context API" /> |
| 🎨 Tailwind CSS | <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white" alt="Tailwind CSS" /> |
| 🎯 Lucide Icons | <img src="https://img.shields.io/badge/Lucide%20Icons-black?logo=lucide&logoColor=white" alt="Lucide Icons" /> |
| 🧪 Vitest + RTL | <img src="https://img.shields.io/badge/Vitest-6E9F18?logo=vitest&logoColor=white" alt="Vitest" /> <img src="https://img.shields.io/badge/RTL-FF4154?logo=testing-library&logoColor=white" alt="RTL" /> |
| ☁ Netlify | <img src="https://img.shields.io/badge/Netlify-00C7B7?logo=netlify&logoColor=white" alt="Netlify" /> |
| 🚀 SpaceX API v4 | <img src="https://img.shields.io/badge/SpaceX%20API-v4-blue?logo=spacex&logoColor=white" alt="SpaceX API" /> |

<<<<<<< HEAD

## 📂 Project Structure  

```

spacex-mission-explorer/
├── public/                  # Static assets
│   └── vite.svg
├── src/
│   ├── tests/               # Test files
│   │   ├── LaunchCard.test.jsx
│   │   ├── LaunchDetails.test.jsx
│   │   └── LaunchesList.test.jsx 
│   ├── api/                 # API calls
│   │   └── spacex.js
│   ├── assets/              # Icons & images
│   │   └── react.svg
│   ├── components/          # Reusable UI components
│   │   ├── ui/              # Shared UI elements
│   │   │   ├── Badge.jsx
│   │   │   ├── Button.jsx
│   │   │   └── index.js
│   │   ├── EmptyState.jsx
│   │   ├── FavoriteButton.jsx
│   │   ├── FilterBar.jsx
│   │   ├── LaunchCard.jsx
│   │   ├── LoadingSkeleton.jsx
│   │   ├── Navbar.jsx
│   │   ├── Pagination.jsx
│   │   └── ThemeToggle.jsx
│   ├── context/             # Global state management
│   │   └── LaunchesProvider.jsx
│   ├── hooks/               # Custom hooks
│   │   └── useDebounce.js
│   ├── lib/                 # Utility functions
│   │   └── utils.js
│   ├── pages/               # Route pages
│   │   ├── LaunchDetails.jsx
│   │   └── LaunchesList.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── main.js
│   └── setupTests.js
├── LICENSE
├── README.md
├── package.json
├── vite.config.mjs
└── tailwind.config.mjs

---

⚡ Getting Started

# 1️⃣ Clone repository
git clone https://github.com/muchurammahesh/spacex-mission-explorer.git
cd spacex-mission-explorer

# 2️⃣ Install dependencies
npm install

# 3️⃣ Run development server
npm run dev

# 4️⃣ Run tests
npm run test

# 5️⃣ Build for production
npm run build

# 6️⃣ Preview build locally
npm run preview


---

✅ Testing

This project uses Vitest + React Testing Library.

npm run test

Test coverage includes:

Rendering & filtering launch list

Favorites toggle & persistence

Mission details modal rendering


---


## 🌍 Deployment  
The project is deployed on **Netlify**:  
[Live App](https://spacex-mission-explorer-mahesh-m.netlify.app/)  

---

## 📌 GitHub Repository  
[spacex-mission-explorer (GitHub)](https://github.com/muchurammahesh/spacex-mission-explorer)  

---

## 📖 Assignment Context  
This project was built as part of the **Atmosly React Intern Assignment**, focusing on:  

- Component-driven development  
- API integration with SpaceX API  
- State management with Context API  
- Accessibility & responsiveness  
- Testing with Vitest + RTL  

---

## 👤 Author  

**Muchuram Mahesh**  

[Email](mailto:muchurammahesh0@gmail.com)  
[Live Demo](https://spacex-mission-explorer-mahesh-m.netlify.app/)  
[GitHub Profile](https://github.com/muchurammahesh)  



