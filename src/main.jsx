import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/App.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import BigSpinner from './components/BigSpinner.jsx';
import Login from './Login.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<BigSpinner />} />
  </React.StrictMode>
);
