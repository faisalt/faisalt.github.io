import React from 'react';
import ReactDOM from 'react-dom/client';
import Projects from './routes/projects.tsx';
import Root from './routes/root.tsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import Artwork from './routes/artwork.tsx';
import Comics from './routes/comics.tsx';
import Media from './routes/media.tsx';
import Photography from './routes/photography.tsx';
import Publications from './routes/publications.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/projects',
    element: <Projects />,
  },
  {
    path: '/publications',
    element: <Publications />,
  },
  {
    path: '/media',
    element: <Media />,
  },
  {
    path: '/photography',
    element: <Photography />,
  },
  {
    path: '/artwork',
    element: <Artwork />,
  },
  {
    path: '/comics',
    element: <Comics />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
