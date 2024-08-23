import React from 'react'
import Hero from './Hero'
import Hero2 from './Hero2'
import Service from './Service'
import LifeAt from './LifeAt'
import Makers from './Makers'
import { Button } from '@chakra-ui/react'
import ChatButton from './ChatButton'
import Footer from './Footer'
import Brands from './Brands'
import Hero3 from './Hero3'
import Hero4 from './Hero4'

const Home = () => {
  return (
   <>
   <LifeAt/>
   <Hero/>
   <Hero2/>
   <Hero3/>
   <Hero4/>  
   <Brands/>
   <Service/>
   <Makers/>
   <ChatButton />
   <Footer/>
   </>
  )
}

export default Home
