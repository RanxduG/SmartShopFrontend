import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import WelcomeBanner from './Components/WelcomeBanner/WelcomeBanner';
import Footer from './Components/Footer/Footer';
import { Container, Typography } from '@mui/material';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<WelcomeBanner />} />
          <Route 
            path="/next-page" 
            element={
              <Container>
                <Typography variant="h4" style={{ marginTop: 20 }}>
                  Next Page
                </Typography>
                {/* Add your content for the next page here */}
              </Container>
            } 
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
