import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage.jsx'
import CreateBooks from './Pages/CreateBooks.jsx';
import ShowPage from './Pages/ShowPage.jsx';
import EditPage from './Pages/EditPage.jsx';
import DeletePage from './Pages/DeletePage.jsx';
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
