import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
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

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = newOpen => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {/* <Sidebar/> */}
      <HomePage />
      <ServicesPage />
      <AboutMe />
      <Portfolio />
      <Contact />
      <Footer />
      {/* <Button onClick={toggleDrawer(true)}>Open drawer</Button> */}
      {/* <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer> */}
      {/* <div
          className={`absolute top-1 bottom-1 rounded-md transition-all duration-300 ease-out ${
            // 1 == 1
              // ? "left-1 w-[calc(50%-0.5rem)] bg-blue-500 shadow-md"
               "left-[calc(50%+0.5rem)] w-[calc(50%-0.5rem)] bg-green-500 shadow-md"
          }`}
        >kkjjjkkkkjkjkj</div> */}
      <Toaster position="top-right" />
    </>
  );
}

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
