import { HStack, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import sls from "../images/sls.png"
const Footer = () => {
  return (
    <VStack  mt={8}>
    <VStack p={4} w={'full'}>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.3225967839116!2d77.37528727560868!3d28.620092084645307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce52edd20e6d7%3A0x2e62bb980ccc7617!2sPioneer%20Venture!5e0!3m2!1sen!2sin!4v1724319768429!5m2!1sen!2sin"
      width="100%"
      height="300"
      style={{
        border: "0",
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)", // Box shadow added here
        borderRadius: "8px" // Optional: to give smooth corners
      }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      > </iframe>
      </VStack>
      <Stack direction={['column','row']} textColor={'white'} w={'full'} p={4} alignItems={'center'} justifyContent={'space-around'} backgroundImage={'https://img.freepik.com/premium-photo/black-wooden-texture-backgrounds-graphic-design-digital-art-parquet-wallpaper-soft-blur_41691-6280.jpg'}>
     {/* <Heading p={4}>Shri Ram Timber&Paints </Heading> */}
        <VStack alignItems={'center'}  justifyContent={'center'} >
            <Heading>Pioneer Estate</Heading>
            <Text textAlign={'center'} w={['100%','60%']}>📍 Sector 63 , A block 144 , Noida ,India </Text>
        </VStack>

        <VStack alignItems={'center'}  justifyContent={'center'}>
            <Heading>Contacts</Heading>
            <Text textAlign={'center'}  ><b>📨</b>pioneerestate@gmail.com</Text>
            <Text textAlign={'center'} ><b>📞</b>88004##310, 882####310</Text>
        </VStack>

        <VStack alignItems={'center'}  justifyContent={'center'}>
            <Heading fontSize={'xl'}>Mode of payment</Heading>
            <Text  textAlign={'center'}>Cash</Text>
            <Text  textAlign={'center'}>Cheques</Text>
            <Text textAlign={'center'}>Visa Card</Text>
        </VStack>
      </Stack>
      </VStack>
  )
}

export default Footer
