import React, { useEffect, useState } from 'react';
import '../components/PropertiesList.css';

function PropertiesList() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const response = await fetch('https://imgbackend-kky1.onrender.com/api/properties');
      const data = await response.json();
      setProperties(data);
    } catch (error) {
      console.error('Error fetching properties:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://imgbackend-kky1.onrender.com/api/properties/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert('Property deleted successfully!');
        fetchProperties(); // Refresh the list after deletion
      } else {
        alert('Failed to delete property.');
      }
    } catch (error) {
      console.error('Error deleting property:', error);
      alert('An error occurred while deleting property.');
    }
  };

  return (
    <div className="properties-list-container">
      <div className="scrollable-container">
        <div className="properties-list">
          {properties.map((property) => (
            <div key={property._id} className="property-card">
              <div className="property-image">
                {property.images.length > 0 ? (
                  <img src={property.images[0].base64} alt={property.name} />
                ) : (
                  <p>No Image Available</p>
                )}
              </div>
              <div className="property-info">
                <h3>{property.name}</h3>
                <p>Location: {property.location}</p>
                <p>Area: {property.areaInSqFt} Sq Ft</p>
                <p>Price: ${property.price}</p>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(property._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PropertiesList;
