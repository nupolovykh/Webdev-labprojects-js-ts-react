# Todo-List React-TypeScript => P.S. README.md by chat-gpt4o

A simple and efficient Todo-List application built with React and TypeScript.
This project showcases modern frontend development practices, including state
management with hooks, custom hooks, context API, and CRUD operations with a
backend server.

## Features

- Add, delete, update, and search tasks
- Sort tasks by text (ascending/descending) and date (ascending/descending)
- Modal window for adding tasks
- Responsive design with Tailwind CSS
- Error handling and loading states
- Backend server with Node.js and SQLite for persistent data storage

## Tech Stack

- **React**: A JavaScript library for building user interfaces
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development
- **React Icons**: A library of popular icons for React applications
- **Webpack**: A module bundler to compile JavaScript modules
- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine
- **SQLite**: A C-language library that implements a small, fast, self-contained, high-reliability SQL database engine

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/DonutsEmperor/WebDevelopment-laboratory-works-plus-react-project.git
   cd react-ts-new-todo
   ```
3. **Install the dependencies:**
   ```bash
   npm install
   ```

4. **Run the backend server:**
   ```bash
   cd backend
   npm run start
   ```

5. **Start the development server:**
   ```bash
   cd ..
   npm run start
   ```

## Folder Structure

- `src/`: Contains the main application code
  - `components/`: React components
  - `assets/`: Assets for app
  - `context/`: Context API files
  - `hooks/`: Custom hooks
  - `models/`: TypeScript models
  - `pages/`: Pages of application
  - `services/`: Services for CRUD operations
- `public/`: Public assets
- `backend/`: Backend server with Node.js and SQLite
- `tailwind.config.js`: Tailwind CSS configuration
- `webpack.config.js`: Webpack configuration

## Usage

1. **Adding a Task:**
   - Use the input field to type your task and click the "Add" button.

2. **Searching for Tasks:**
   - Use the search input to filter tasks by text.

3. **Sorting Tasks:**
   - Use the sort dropdown to sort tasks by text or date.

4. **Updating a Task:**
   - Click on a task to edit its text or status.

5. **Deleting a Task:**
   - Click the delete icon next to a task to remove it.

## Custom Hooks and Context API

- **useDeals:** Manages task operations like fetch, add, delete, and update.
- **ModalContext:** Provides modal state and functions to open/close modal windows.
- **useDealsContext:** Accesses deals state and functions across components.

## Deployment

1. **Build the application:**
   ```bash
   npm run build
   ```

2. **Deploy the build folder to your preferred hosting service.**

![image](https://github.com/DonutsEmperor/WebDevelopment-laboratory-works-plus-react-project/assets/96892429/90fba81b-0bfb-4fca-ab94-c590d41d54a1)

