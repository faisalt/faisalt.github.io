import React from 'react';
import ReactDOM from 'react-dom/client';

import { HashRouter, Route, Routes } from 'react-router-dom';

import Artwork from './routes/artwork.tsx';
import Comics from './routes/comics.tsx';
import Media from './routes/media.tsx';
import Photography from './routes/photography.tsx';
import Projects from './routes/projects.tsx';
import Publications from './routes/publications.tsx';
import Root from './routes/root.tsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter basename='/'>
      <Routes>
        <Route path='/' element={<Root />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/publications' element={<Publications />} />
        <Route path='/media' element={<Media />} />
        <Route path='/photography' element={<Photography />} />
        <Route path='/artwork' element={<Artwork />} />
        <Route path='/comics' element={<Comics />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
);
