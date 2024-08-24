import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/Form.css';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    areaInSqFt: '',
    price: '',
    images: [],
  });

  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Used for navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const promises = files.map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve({ name: file.name, base64: reader.result });
        reader.onerror = reject;
      });
    });

    Promise.all(promises)
      .then((base64Images) => {
        setFormData((prevData) => ({
          ...prevData,
          images: base64Images,
        }));
      })
      .catch((error) => {
        console.error('Error converting images to base64:', error);
        setError('Failed to process images.');
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    setError('');

    try {
      const response = await fetch('https://estate-backend-btwr.onrender.com/api/properties', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Property uploaded successfully!');
        setFormData({
          name: '',
          location: '',
          areaInSqFt: '',
          price: '',
          images: [],
        });
      } else {
        const errorData = await response.json();
        alert(`Failed to upload property: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred while uploading the property.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit}>
        <h2>Upload Property</h2>
        {error && <div className="error-message">{error}</div>}
        {/* Form fields */}
        <div className="form-group">
          <label htmlFor="name">Property Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="areaInSqFt">Area (Sq Ft)</label>
          <input
            type="number"
            id="areaInSqFt"
            name="areaInSqFt"
            value={formData.areaInSqFt}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="images">Upload Images</label>
          <input
            type="file"
            id="images"
            name="images"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            required
          />
        </div>
        <button className="view-properties-btn" type="submit" disabled={uploading}>
          {uploading ? 'Uploading...' : 'Submit Property'}
        </button>
        <button className="view-properties-btn" onClick={() => navigate('/properties')}>
        View All Properties
      </button>
      </form>

    </div>
  );
}

export default Form;
