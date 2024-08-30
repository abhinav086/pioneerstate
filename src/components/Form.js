import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/Form.css';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    areaInSqFt: '',
    price: '',
    images: [], // Array to store images
    type: '',
    description: '',
  });

  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [selectMorePrompt, setSelectMorePrompt] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTypeChange = (selectedType) => {
    setFormData((prevData) => ({
      ...prevData,
      type: selectedType,
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files); // Convert FileList to Array
    if (files.length === 1) {
      setSelectMorePrompt('Please select more images.');
    } else {
      setSelectMorePrompt('');
    }

    // Convert files to base64 and update state
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
          images: [...prevData.images, ...base64Images], // Append new images
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
      const response = await fetch('https://imgbackend-6dgr.onrender.com/api/properties', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          areaInSqFt: Number(formData.areaInSqFt),
          price: Number(formData.price),
          type: formData.type,
          description: formData.description.trim(),
        }),
      });

      if (response.ok) {
        alert('Property uploaded successfully!');
        setFormData({
          name: '',
          location: '',
          areaInSqFt: '',
          price: '',
          images: [],
          type: '',
          description: '',
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
        <h1>Upload Property</h1>
        {error && <div className="error-message">{error}</div>}

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
          <label>Property Type</label>
          <div className="chips">
            {['Residential Apartment', 'Independent Floor', 'Residential Land', 'Studio Apartment'].map((type) => (
              <button
                type="button"
                key={type}
                className={`chip ${formData.type === type ? 'selected' : ''}`}
                onClick={() => handleTypeChange(type)}
              >
                {type}
              </button>
            ))}
          </div>
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
          <label htmlFor="description">Description (under 50 words)</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            maxLength={250}
            placeholder="Enter property description (under 50 words)"
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
          {selectMorePrompt && <p className="prompt-message">{selectMorePrompt}</p>}
        </div>

        {/* Image Preview */}
        <div className="image-preview">
          {formData.images.length > 0 &&
            formData.images.map((image, index) => (
              <img
                key={index}
                src={image.base64}
                alt={`Uploaded preview ${index + 1}`}
                width="100px"
                style={{ margin: '5px' }}
              />
            ))}
        </div>

        <button className="view-properties-btn" type="submit" disabled={uploading}>
          {uploading ? 'Uploading...' : 'Submit Property'}
        </button>
        <button
          className="view-properties-btn"
          type="button"
          onClick={() => navigate('/properties')}
        >
          View All Properties
        </button>
      </form>
    </div>
  );
}

export default Form;