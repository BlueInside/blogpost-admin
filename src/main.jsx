import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/App.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import BigSpinner from './components/BigSpinner.jsx';
import Login from './routes/Login.jsx';
import { actionLogin } from './loginAction.jsx';
import Posts from './routes/Posts.jsx';
import { postsLoader, postLoader, commentsLoader } from './postsLoader.jsx';
import PostDetails from './routes/PostDetails.jsx';
import PostComments from './routes/PostComments.jsx';
import { actionDelete } from './deleteComment.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/login',
        element: <Login />,
        action: actionLogin,
      },
      {
        path: '/posts',
        element: <Posts />,
        loader: postsLoader,
      },
      {
        path: '/posts/:postId',
        element: <PostDetails />,
        loader: postLoader,
        children: [
          {
            path: '',
            element: <PostComments />,
            loader: commentsLoader,
          },
          {
            path: ':commentId',
            action: actionDelete,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<BigSpinner />} />
  </React.StrictMode>
);
