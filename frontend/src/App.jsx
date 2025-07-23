import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import './App.css';

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ]);
  return( 
    <RouterProvider router={ router }></RouterProvider>
  )
}

export default App;
