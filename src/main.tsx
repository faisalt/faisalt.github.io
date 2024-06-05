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
    path: '/websitev2',
    element: <Root />,
  },
  {
    path: '/websitev2/projects/',
    element: <Projects />,
  },
  {
    path: '/websitev2/publications',
    element: <Publications />,
  },
  {
    path: '/websitev2/media',
    element: <Media />,
  },
  {
    path: '/websitev2/photography',
    element: <Photography />,
  },
  {
    path: '/websitev2/artwork',
    element: <Artwork />,
  },
  {
    path: '/websitev2/comics',
    element: <Comics />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
