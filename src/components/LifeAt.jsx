import {  HStack, Heading, Image, VStack, Box } from '@chakra-ui/react'
import React from 'react'
import c1 from '../images/c1.jpeg'
import c2 from '../images/c2.jpeg'
import c3 from '../images/c3.jpeg'
import c9 from '../images/c9.jpeg'

const LifeAt = () => {
  return (
    <VStack spacing={4} padding={8} paddingBottom={0} width="100%">
      <Heading
        w={'full'}
        textAlign={'left'}
        paddingTop={6}
        color={'#914F1E'}
        rounded={'lg'}
        letterSpacing={'widest'}
      >
      </Heading>
      
      <HStack w={'100%'} justifyContent={'center'} flexWrap={'wrap'}>
        <Box position="relative" height={[28, 56]} width={[28, 56]} m={9}>
          <Image
            src={c1}
            height="full"
            width="full"
            objectFit={'cover'}
            shadow={'2xl'} // Increased shadow
            rounded={'lg'}
          />
          <Box
            position="absolute"
            bottom="4"
            left="4"
            color="white"
            fontSize="lg"
            fontWeight="bold"
            textShadow="1px 1px 3px rgba(0, 0, 0, 0.8)"
          >
            RESIDENTIAL APPARTMENT
          </Box>
        </Box>
        
        <Box position="relative" height={[28, 56]} width={[28, 56]} m={9}>
          <Image
            src={c2}
            height="full"
            width="full"
            objectFit={'cover'}
            shadow={'2xl'} // Increased shadow
            rounded={'lg'}
          />
          <Box
            position="absolute"
            bottom="4"
            left="4"
            color="white"
            fontSize="lg"
            fontWeight="bold"
            textShadow="1px 1px 3px rgba(0, 0, 0, 0.8)"
          >
            INDEPENDENT FLOOR
          </Box>
        </Box>

        <Box position="relative" height={[28, 56]} width={[28, 56]} m={9}>
          <Image
            src={c3}
            height="full"
            width="full"
            objectFit={'cover'}
            shadow={'2xl'} // Increased shadow
            rounded={'lg'}
          />
          <Box
            position="absolute"
            bottom="4"
            left="4"
            color="white"
            fontSize="lg"
            fontWeight="bold"
            textShadow="1px 1px 3px rgba(0, 0, 0, 0.8)"
          >
            RESIDENTIAL LAND
          </Box>
        </Box>

        <Box position="relative" height={[28, 56]} width={[28, 56]} m={9}>
          <Image
            src={c9}
            height="full"
            width="full"
            objectFit={'cover'}
            shadow={'2xl'} // Increased shadow
            rounded={'lg'}
          />
          <Box
            position="absolute"
            bottom="4"
            left="4"
            color="white"
            fontSize="lg"
            fontWeight="bold"
            textShadow="1px 1px 3px rgba(0, 0, 0, 0.8)"
          >
            STUDIO APPARTMENT
          </Box>
        </Box>
      </HStack>
    </VStack>
  )
}
export default LifeAt
