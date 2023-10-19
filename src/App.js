
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Router/Routes/Routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';
import { ThemeContext } from 'context/ThemeContext';



function App() {
  const {darkMode, themeToggle} = useContext(ThemeContext)

  return (
    <div className={`${!darkMode ? "bg-white" : "bg-slate-500"}`}>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer
      theme="dark"
      position="top-right"
      autoClose={3000}
      closeOnClick
      pauseHover={false} />                  
    </div>
  );
}

export default App;
