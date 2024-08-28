import { HStack, Heading, Image, VStack, Box } from '@chakra-ui/react';
import React from 'react';
import p1 from '../images/p1.jpeg';
import p2 from '../images/p2.jpeg';
import p3 from '../images/p3.jpeg';
import p4 from '../images/p4.jpeg';

import './LifeAt.css'; // Import the CSS file

const LifeAt = ({ onCategorySelect, selectedCategory }) => {
  const handleCategoryClick = (category) => {
    if (selectedCategory === category) {
      onCategorySelect(''); // Unselect if the same category is clicked
    } else {
      onCategorySelect(category); // Select new category
    }
  };

  return (
    <VStack className="life-at-container" spacing={4}>
      <Heading className="life-at-heading">
        {/* Add heading text here if needed */}
      </Heading>

      <HStack w={'100%'} justifyContent={'center'} flexWrap={'wrap'}>
        {[
          { src: p1, label: 'RESIDENTIAL APARTMENT' },
          { src: p3, label: 'INDEPENDENT FLOOR' },
          { src: p2, label: 'RESIDENTIAL LAND' },
          { src: p4, label: 'STUDIO APARTMENT' },
        ].map(({ src, label }) => (
          <Box
            key={label}
            className="life-at-image-container"
            onClick={() => handleCategoryClick(label)}
          >
            <Image
              src={src}
              className={`life-at-image ${selectedCategory === label ? 'life-at-image-selected' : ''}`}
            />
            <Box className="life-at-label">
              {label}
            </Box>
          </Box>
        ))}
      </HStack>
    </VStack>
  );
};

export default LifeAt;
