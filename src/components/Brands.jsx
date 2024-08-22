import { Flex, HStack, Heading, Image, Stack, VStack } from '@chakra-ui/react'
import React from 'react'


const Brands = () => {
  return (
   <VStack spacing={4} padding={8}  width="100%">
    <Heading w={'full'} textAlign={'center'} padding={4} color={'#914F1E'} bgColor={'#DEAC80'} rounded={'lg'} letterSpacing={'widest'}>Types of Property We sell</Heading>
    <HStack w={['100%','90%']} spacing={[4,8]} overflowX={'scroll'} overflowY={'hidden'}   flexWrap={'nowrap'} >
    <Image src={'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg'} height={[16,32]} width={[16,32]} objectFit={'contain'} shadow={'xl'} className='homegal'  rounded={'lg'}/>
    <Image src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYC_j0cez1zkj6vg-7AXTynmtAQPQKTcSHLw&s'} height={[16,32]} width={[16,32]} objectFit={'contain'} shadow={'xl'} className='homegal' rounded={'lg'}/>
    <Image src={'https://99realty.in/wp-content/uploads/2023/08/Residential-Land.jpg'} height={[16,32]} width={[16,32]} objectFit={'contain'} shadow={'xl'} className='homegal' rounded={'lg'}/>
    <Image src={'https://uniquetimberplywood.com/wp-content/themes/UniqueTimber/assets/images/brands/timedecor.png'} height={[16,32]} width={[16,32]} objectFit={'contain'} shadow={'xl'} className='homegal' rounded={'lg'}/>
    <Image src={'https://assets.architecturaldigest.in/photos/64f84cc61d4896b633fba77a/master/w_1600%2Cc_limit/The%2520art%2520deco%2520inspired%2520de%25CC%2581cor%2520of%2520CIRQA%25201960%2520.jpg'} height={[16,32]} width={[16,32]} objectFit={'contain'} shadow={'xl'} className='homegal' rounded={'lg'}/>
    <Image src={'https://content.jdmagicbox.com/comp/delhi/k3/011pxx11.xx11.111105172905.p5k3/catalogue/kamboj-restaurant-noida-sector-37-noida-north-indian-restaurants-a1d77thhz3.jpg'} height={[16,32]} width={[16,32]} objectFit={'contain'} shadow={'xl'} className='homegal' rounded={'lg'}/>
    <Image src={'https://img.freepik.com/free-photo/modern-office-space-with-desktops-with-modern-computers-created-with-generative-ai-technology_185193-110089.jpg'} height={[16,32]} width={[16,32]} objectFit={'contain'} shadow={'xl'} className='homegal' rounded={'lg'}/>
    <Image src={'https://mpghardware.com/img/clients/l2.jpg'} height={[16,32]} width={[16,32]} objectFit={'contain'} shadow={'xl'} className='homegal' rounded={'lg'}/>
  
    </HStack>
   </VStack>
  )
}

export default Brands
