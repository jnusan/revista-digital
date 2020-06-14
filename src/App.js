import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Container } from 'react-bootstrap';
import Routes from './components/Navbar/Routes';
import MainJumbotron from './components/Jumbotron/Jumbotron';

function App() {
  return (
    <BrowserRouter>
      <Container fluid className="p-0">
        <Navbar></Navbar>
        <MainJumbotron></MainJumbotron>
        <Routes></Routes>
        <Footer></Footer>
      </Container>
    </BrowserRouter>
  );
}

export default App;
