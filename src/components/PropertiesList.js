import React, { useEffect, useState } from 'react';
import ImageSlider from './ImageSlider'; 
import '../components/PropertiesList.css';
import LifeAt from './LifeAt';

function PropertiesList({ searchQuery }) {
  const [properties, setProperties] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const response = await fetch('https://imgbackend-6dgr.onrender.com/api/properties');
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
      const response = await fetch(`https://imgbackend-6dgr.onrender.com/api/properties/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert('Property deleted successfully!');
        fetchProperties(); 
      } else {
        alert('Failed to delete property.');
      }
    } catch (error) {
      console.error('Error deleting property:', error);
      alert('An error occurred while deleting property.');
    }
  };

  const filteredProperties = properties.filter((property) => {
    const matchesSearchQuery = property.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                               property.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
                               property.location.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === '' || property.type.toLowerCase() === selectedCategory.toLowerCase();

    return matchesSearchQuery && matchesCategory;
  });

  return (
    <div>
      <LifeAt 
        onCategorySelect={(category) => setSelectedCategory(category)}
        selectedCategory={selectedCategory}
      />
      <div className="properties-list-container">
        <div className="scrollable-container">
          <div className="properties-list">
            {filteredProperties.length > 0 ? (
              filteredProperties.map((property) => (
                <div key={property._id} className="property-card">
                  <ImageSlider images={property.images || []} />
                  <div className="property-info">
                    <h3>{property.name}</h3>
                    <h1>{property.description}</h1>
                    <p>Type - {property.type}</p>
                    <p>Location - {property.location}</p>
                    <p>{property.areaInSqFt} Sq Ft</p>
                    <p>₹{property.price}/-</p>
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
              <p>Properties Loading...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertiesList;
