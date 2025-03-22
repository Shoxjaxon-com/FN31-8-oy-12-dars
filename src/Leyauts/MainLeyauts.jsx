import React from 'react';
import Navbar from '../componets/Navbar';
import Footer from '../componets/Footer';

function MainLeyauts({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">{children}</main>

      <Footer />
    </div>
  );
}

export default MainLeyauts;
