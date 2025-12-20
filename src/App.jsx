import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Sidebar from './components/Sidebar';
// import './App.css'
import ServicesPage from './components/ServicesPage';
import HomePage from './components/HomePage';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/ContactPage';
import Footer from './components/FooterPage';
import { Toaster } from 'react-hot-toast';
import DetailsPage from './components/DetailsPage';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Resume from './components/Resume';

// export default function TemporaryDrawer() {
 
//   return (
//     <>
//       {/* <Sidebar/> */}
//       <HomePage />
//       <ServicesPage />
//       <AboutMe />
//       <Portfolio />
//       <Contact />
//       <Footer />
//       <Toaster position="top-right" />
//     </>
//   );
// }

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

const App = () => {
  return (
    <div className="app">
      <Routes>
      <Route path="/" element={<Outlet />}>

          {/* Redirect root to dashboard */}
          <Route index element={<Navigate replace to="/main" />} />

          <Route
            path="/main"
            element={
              <div className=''>
                <HomePage />
                <ServicesPage />
                <AboutMe />
                <Portfolio />
                <Resume />
                <Contact />
                <Footer />
              </div>
            }
          />
        </Route>
        <Route path="/DetailsPage" element={<DetailsPage />} />
      </Routes>
      {/* </Suspense> */}

      <Toaster position="top-right" autoClose={3000} />
    </div>
  );
};

export default (App);
