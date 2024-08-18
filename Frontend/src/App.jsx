import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateBooks from './Pages/CreateBooks';
import ShowPage from './Pages/ShowPage';
import EditPage from './Pages/EditPage';
import DeletePage from './Pages/DeletePage';
function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/books/create' element={<CreateBooks />} />
      <Route path='/books/details/:id' element={<ShowPage />} />
      <Route path='/books/edit/:id' element={<EditPage />} />
      <Route path='/books/delete/:id' element={<DeletePage/>}/>
    </Routes>

  );
}

export default App;
