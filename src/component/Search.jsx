import React, { useState } from 'react';
import Navbar from './Navbar';
import './Search.css';

export const Search = () => {
  const [carDetails, setCarDetails] = useState([]);
  const [expandedCard, setExpandedCard] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // In a real application, you would filter results based on searchQuery
    console.log("Searching for:", searchQuery);
    
    // Set the car details when search is clicked
    const details = [
      { owner: 'John Doe', model: 'Tesla Model S', number: 'XYZ 1234', image: 'https://via.placeholder.com/300x200?text=Tesla+Model+S' },
      { owner: 'Jane Smith', model: 'Ford Mustang', number: 'ABC 5678', image: 'https://via.placeholder.com/300x200?text=Ford+Mustang' },
      { owner: 'Emily Johnson', model: 'BMW X5', number: 'DEF 9101', image: 'https://via.placeholder.com/300x200?text=BMW+X5' },
      { owner: 'Michael Brown', model: 'Audi A6', number: 'GHI 1122', image: 'https://via.placeholder.com/300x200?text=Audi+A6' },
      { owner: 'Sarah Wilson', model: 'Mercedes-Benz C-Class', number: 'JKL 3344', image: 'https://via.placeholder.com/300x200?text=Mercedes-Benz+C-Class' },
      { owner: 'David Lee', model: 'Toyota Camry', number: 'MNO 5566', image: 'https://via.placeholder.com/300x200?text=Toyota+Camry' }
    ];
    setCarDetails(details);
  };

  const toggleMoreDetails = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      
      {/* Empty space div to create separation */}
      <div className="py-4"></div>
      
      {/* Stylish Search Bar Section */}
      <div className="search-container bg-gradient py-4 shadow-lg">
        <div className="container">
          <div className="search-wrapper">
            
            <div className="search-box-container">
              <div className="search-box">
                <i className="search-icon fas fa-search"></i>
                <input 
                  type="text" 
                  className="search-input" 
                  placeholder="Enter Vehicle Number (e.g., XYZ 1234)" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="search-button" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scrollable content area */}
      <div className="container mt-4 flex-grow-1">
        {carDetails.length > 0 ? (
          <div className="row g-3">
            {carDetails.map((car, index) => (
              <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4" key={index}>
                <div className="card" style={{ width: '100%', height: expandedCard === index ? '350px' : '250px', display: 'flex', flexDirection: 'row' }}>
                  <img src={car.image} alt={car.model} style={{ width: '40%', height: '100%', objectFit: 'cover' }} />
                  <div className="card-body" style={{ width: '60%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <h5 className="card-title">Car Details</h5>
                      <p><strong>Owner:</strong> {car.owner}</p>
                      <p><strong>Model:</strong> {car.model}</p>
                      <p><strong>Number:</strong> {car.number}</p>
                      <button className="btn btn-primary mt-2" onClick={() => toggleMoreDetails(index)}>
                        {expandedCard === index ? 'Hide Details' : 'More Details'}
                      </button>
                    </div>
                    {expandedCard === index && (
                      <div className="mt-3">
                        <p>Additional car details can be displayed here, including maintenance history, insurance information, etc.</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center mt-5">
            <p></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;