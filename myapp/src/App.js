import React from 'react'
import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet, Link } from 'react-router-dom';

function Home() {
  return (
    <h1>Welcome to the Home Page!</h1>
  );
}

function About() {
  return (
    <Fragment>
      <h1>About Us</h1>
      <Link to='/about/nested'>nested</Link>
    </Fragment>
  );
}

function NotFound() {
  return (
    <Fragment>
      <h1>404 - Page Not Found</h1>
    </Fragment>
  );
}


function Nested() {
  return <h1>Nested</h1>;
}


function App() {
  return (
    <Fragment>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/nested" element={<Nested />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Outlet />
      </Router>
    </Fragment>
  );
}

export default App;
