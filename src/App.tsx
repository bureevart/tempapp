import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Container, Nav, } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Routes,
  Link
} from 'react-router-dom';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import MainPage from './Pages/MainPage/MainPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorPage from './Pages/ErrorPage/ErrorPage';


function App() {
  return (
    <> 
    <BrowserRouter>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="">BeautifulWorkingApp</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link as={Link} to="/register">Register</Nav.Link>
              <Nav.Link as={Link} to='/login'>Login</Nav.Link>
              <Nav.Link as={Link} to='/main'>MainPage</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
    <div className='App'>
      <Routes>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/main' element={<MainPage/>}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </div>
    </BrowserRouter>
    </>
  )
}

export default App;
