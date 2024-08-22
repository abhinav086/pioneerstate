import { Box, Card, CardBody, Flex, HStack, Heading,  Stack, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'



const ProductCard = ({img,title})=>{
  return(
    <Card  maxW='xs' borderBottom={'2px solid orange'}>
    <CardBody p={8} brightness={'60%'} backgroundImage={img} >
      <Stack mt='6' spacing='3' alignItems={'center'}>
       
      <Box
          p={4}
          position="relative"
          zIndex={1}
          textColor={'white'}
          bg="rgba(0,0,0,0.5)" /* Adjust brightness here */
        >
          <Text  fontSize="xl" mb={2}>{title}</Text>
          <Text borderBottom={'1px'}><a href='#'> See Material Used</a></Text>
        </Box>
      </Stack>
    </CardBody>
  </Card>
  )
}

const Service = () => {

    const service = [
      "Laminates",
      "Mdf board",
      "Plywood/Blockboard",
      "Shuttering Plywood",
      "Timber Wood",
      "Packaging Plywood",
      "Furniture Hardware"
        
              ];
            
              const [currentservice, setCurrentservice] = useState(service[0]);
              const [index, setIndex] = useState(0);
            
              useEffect(() => {
                const intervalId = setInterval(() => {
                  setIndex((prevIndex) => (prevIndex + 1) % service.length);
                }, 2000); // Switch image every 2 seconds
            
                return () => clearInterval(intervalId); // Clear interval on component unmount
              }, [service.length]);
            
              useEffect(() => {
                setCurrentservice(service[index]);
              }, [index]);
  return (
   <Stack direction={['column-reverse','row']} backgroundColor={'ButtonFace'} p={1} alignItems={'center'} my={12} mx={2}>
     <VStack w={'100%'} alignItems={['start','center']} overflowX={'scroll'} overflowY={'hidden'}  >

     <Flex flexWrap={['nowrap','wrap']} justifyContent={['flex-start','center']} gap={2} >

       

       <ProductCard img={'https://uniquetimberplywood.com/wp-content/themes/UniqueTimber/assets/images/products/product-category-03.png'} title={'Laminates'} />

       <ProductCard img={'https://uniquetimberplywood.com/wp-content/themes/UniqueTimber/assets/images/products/product-category-04.png'} title={'Mdf Board'} />
       
       <ProductCard img={'https://uniquetimberplywood.com/wp-content/themes/UniqueTimber/assets/images/products/product-category-02.png'} title={'Plywood/Blockboard'} />
      
       <ProductCard img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW6WzvuUO_MxYDxUO8ylak7Gsq7ZbeLEYlQdFpQJYz0w&s'} title={'Packaging Plywood'} />

       


     </Flex>
     </VStack>
      

  
    <VStack justifycontent="center" w="full" h={'full'} alignItems="center"> 
  <Heading fontSize={'lg'} textColor={'orange'}>PRODUCT USED</Heading>
  <Heading>{currentservice}</Heading>
    </VStack>
   </Stack>
  )
}

export default Service
