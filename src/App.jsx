import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import Home from './components/home/Home';
import Project_1 from './components/project_1/Project_1';
import Project_2 from './components/project_2/Project_2';
import Project_3 from './components/project_3/Project_3';
import Project_4 from './components/project_4/Project_4';
import NotFound from './components/notFound/NotFound';
import Footer from './components/footer/Footer';
import './App.css';
import './components/theme/buttons.css';
import './components/theme/videos.css';
import './components/theme/theme_all.css';

const App = () => {
  return (
    <Router>
      <div className='app'>
        <div className='header'>
          <NavBar />
        </div>
        <main className='content'>
          <Routes>
            <Route
              path='/'
              element={
                <div>
                  <Home />
                </div>
              }
            />
            <Route
              path='project_1'
              element={
                <div>
                  <Project_1 />
                </div>
              }
            />
            <Route
              path='project_2'
              element={
                <div>
                  <Project_2 />
                </div>
              }
            />
            <Route
              path='project_3'
              element={
                <div>
                  <Project_3 />
                </div>
              }
            />
            <Route
              path='project_4'
              element={
                <div>
                  <Project_4 />
                </div>
              }
            />
            <Route
              path='*'
              element={
                <div>
                  <NotFound />
                </div>
              }
            />
          </Routes>
        </main>
        <div className='footer'>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App
