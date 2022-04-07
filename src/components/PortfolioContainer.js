import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Contact from './pages/Contact';
import Aboutme from './pages/Aboutme';
import Portfolio from './pages/Porfolio';
import Resume from './pages/Resume';
import Footer from './Footer';
import './PortfolioContainer.css'

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Aboutme');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Aboutme') {
      return <Aboutme />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className='page-container'>
      {/* We are passing the currentPage from state and the function to update it */}
      <div className="content-wrap">
      <header>
        <div className="jumbotron jumbotron-fluid">
            <div className="container row justify-content-between">
                <div>
                    <h1 className="display-4 ml-4">Francis Bond</h1>
                </div>
            </div>
        </div>
        </header>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer/>
      </div>
    </div>
  );
}
