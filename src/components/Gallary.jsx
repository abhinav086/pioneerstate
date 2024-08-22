import {  HStack, Heading, Image,  VStack } from '@chakra-ui/react'
import React from 'react'
import c1 from '../images/c1.jpeg'
import c2 from '../images/c2.jpeg'
import c3 from '../images/c3.jpeg'
import c4 from '../images/c4.jpeg'
import c5 from '../images/c5.jpeg'
import c6 from '../images/c6.jpeg'
import c7 from '../images/c7.jpeg'
import c8 from '../images/c8.jpeg'

const Gallary = () => {
  return (
   <VStack spacing={8} padding={8}   width="100%"  pt={['30vh','25vh']} >
    <Heading w={'full'} textAlign={'center'} padding={4}  letterSpacing={'widest'}> Gallery</Heading>
    <HStack w={'100%'}  justifyContent={'center'}  flexWrap={'wrap'} >
    <Image src={c1} height={[32,64]} width={[32,64]} objectFit={'cover'} shadow={'xl'} className='homegal'  rounded={'lg'}/>
    <Image src={c2} height={[32,64]} width={[32,64]} objectFit={'cover'} shadow={'xl'} className='homegal' rounded={'lg'}/>
    <Image src={c3} height={[32,64]} width={[32,64]} objectFit={'cover'} shadow={'xl'} className='homegal'  rounded={'lg'}/>
    <Image src={c4} height={[32,64]} width={[32,64]} objectFit={'cover'} shadow={'xl'} className='homegal' rounded={'lg'}/>
    <Image src={c5} height={[32,64]} width={[32,64]} objectFit={'cover'} shadow={'xl'} className='homegal' rounded={'lg'}/>
    <Image src={c6} height={[32,64]} width={[32,64]} objectFit={'cover'} shadow={'xl'} className='homegal' rounded={'lg'}/>
    <Image src={c7} height={[32,64]} width={[32,64]} objectFit={'cover'} shadow={'xl'} className='homegal' rounded={'lg'}/>
    <Image src={c8} height={[32,64]} width={[32,64]} objectFit={'cover'} shadow={'xl'} className='homegal' rounded={'lg'}/>


    <Image src={'https://uniquetimberplywood.com/wp-content/themes/UniqueTimber/assets/images/products/product-category-03.png'} height={[32,64]} width={[32,64]} objectFit={'cover'} shadow={'xl'} className='homegal' rounded={'lg'}/>
    <Image src={'https://uniquetimberplywood.com/wp-content/themes/UniqueTimber/assets/images/products/product-category-04.png'} height={[32,64]} width={[32,64]} objectFit={'cover'} shadow={'xl'} className='homegal' rounded={'lg'}/>
    
    {/* <div className="card" >
        <div className="card-item">
          <img src={c8} alt="room-pic" />
          <div className="card-content">
            <h1>Plywood</h1>
            <p>Our Ply</p>

            <br />
          </div>
        </div>
      </div> */}
    

    </HStack>
   </VStack>
  )
}

export default Gallary
