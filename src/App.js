import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './index.css'; // Import your custom CSS here

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
