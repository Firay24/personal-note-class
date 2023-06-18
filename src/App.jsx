import React from 'react';
import HeaderPage from './components/HeaderPage';
import HomePage from './pages/HomePage';
import ArchivePage from './pages/ArchivePage';
import DetailPage from './pages/DetailPage';
import CreatePage from './pages/CreatePage';
import EditPage from './pages/EditPage';
import NotFoundPage from './pages/NotFoundPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app-container">
      <header>
        <HeaderPage />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/archieve' element={<ArchivePage />} />
          <Route path='/note/:id' element={<DetailPage />} />
          <Route path='/createNote' element={<CreatePage />} />
          <Route path='/editNote/:id' element={<EditPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
