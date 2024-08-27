import React, { useEffect, useState } from 'react';
import '../components/PropertiesList.css';

function PropertiesList({ searchQuery }) {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/properties');
      if (response.ok) {
        const data = await response.json();
        setProperties(data);
      } else {
        throw new Error('Failed to fetch properties');
      }
    } catch (error) {
      console.error('Error fetching properties:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/api/properties/${id}`, {
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

  // Filter properties based on the search query
  const filteredProperties = properties.filter((property) =>
    property.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    property.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
    property.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="properties-list-container">
      <div className="scrollable-container">
        <div className="properties-list">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property) => (
              <div key={property._id} className="property-card">
                <div className="property-image">
                  {property.images && property.images.length > 0 ? (
                    <img src={property.images[0].base64} alt={property.name} />
                  ) : (
                    <p>No Image Available</p>
                  )}
                </div>
                <div className="property-info">
                  <h3>{property.name}</h3>
                  <p>Type: {property.type}</p> {/* Display property type */}
                  <p>Location: {property.location}</p>
                  <p>Area: {property.areaInSqFt} Sq Ft</p>
                  <p>Price: ₹{property.price}/-</p>
                  <p>{property.description}</p> {/* Display property description */}
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(property._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No properties available.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default PropertiesList;
