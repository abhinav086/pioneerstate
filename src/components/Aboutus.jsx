import {Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Aboutus = () => {
  return (
   <VStack mt={['30vh','25vh']} >
    <VStack>
        <Image src={'https://media1.tenor.com/m/Hnhbu9kiWX4AAAAd/skyline-buildings.gif'} height={['40vh','60vh']} w={'92vw'} borderRadius="lg" // Adds rounded borders
  boxShadow="1px 18px 16px rgba(0, 0, 0, 0.3)" // Customizable shadow
  border="2px solid #e2e8f0"/>
    </VStack>
    <VStack p={8} >
    <Image src={'https://gifdb.com/images/high/the-more-you-know-book-z9hnav8reuapmd81.gif'} h={28} w={28} borderRadius="lg" // Adds rounded borders
  boxShadow="lg"  />

<Text fontSize={'xl'}  textAlign={'match-parent'}>
Welcome to Pioneer Estate, the leading name in property sales and rentals in Noida. We pride ourselves on offering a diverse range of properties to suit all your needs, whether you're looking to buy or rent. Our extensive portfolio includes luxurious apartments, spacious villas, and commercial spaces, each meticulously curated to meet the highest standards of quality and comfort.

At Pioneer Estate, we understand that finding the perfect property is a significant decision. Our team of experienced professionals is dedicated to guiding you through every step of the process, ensuring a seamless and stress-free experience. From initial consultation to final transaction, we provide personalized services tailored to your unique requirements.

Whether you're searching for a cozy home, an investment opportunity, or a prime commercial location, Pioneer Estate is your trusted partner. Explore our listings to discover properties that match your vision and lifestyle. With our commitment to excellence and customer satisfaction, we are here to help you make the best real estate decisions in Noida. Trust Pioneer Estate for all your property needs and experience unparalleled service and expertise.

</Text>
    </VStack>
   </VStack>
  )
}

export default Aboutus
