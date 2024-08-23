import { Button, Card, CardBody, CardFooter, Flex, HStack, Heading, Image, Stack, Tag, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useState, useEffect } from 'react';
import { FaPhone, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Hero4 = () => {

  const images = [
    'https://images.pexels.com/photos/1694360/pexels-photo-1694360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  ];
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Switch image every 2 seconds

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, [images.length]);

  useEffect(() => {
    setCurrentImage(images[index]);
  }, [index]);


  return (
    <section>

      <Card m={['2', '8']}

        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        shadow={'lg'}
        h={['100%', '100%']}
        boxSizing='border-box'
        mt={['30vh', '25vh']}


      >
        <Image
          objectFit='cover'
          minW={{ base: '100%', sm: '60vw' }}
          minH={{ base: '30vh', sm: '50vh' }}
          src={currentImage}
          alt='Caffe Latte'
          rounded={'lg'}

        />
        <Stack>
          <aside>
            <CardBody>
              <Heading size={'lg'} className='heroHeading'>
               Houses team
              </Heading>

              <Text py='4'>
                <Text display={'inline'} textColor={'orange'}><b> Office working Space @pioneerestate  </b>&nbsp;</Text>
                Discover versatile working spaces and stylish houses with Pioneer Venture. Whether you need a dynamic office environment or a comfortable home, our offerings cater to your professional and residential needs. Contact us to explore our solutions and elevate your workspace and living experience.
              </Text>
              <Flex wrap={'wrap'} gap={4}>
                <Tag size="md" variant="subtle" colorScheme="gray">
                  Fully Furnished
                </Tag>

                <Tag size="md" variant="subtle" colorScheme="gray">
                  Wooden Floor
                </Tag>

                <Tag size="md" variant="subtle" colorScheme="gray">
                  Imported Marble
                </Tag>
                <Tag size="md" variant="subtle" colorScheme="gray">
                  Shuttering Plywood
                </Tag>
                <Tag size="md" variant="subtle" colorScheme="gray">
                  Spacious
                </Tag>
              </Flex>
              <Button variant={'outline'} mt={4} >
                <a href='https://maps.app.goo.gl/tBfynaydUY8Htwpi8' target="_blank">
                  📍 Sector 61, Noida
                </a>
              </Button>
            </CardBody>
          </aside>

          <CardFooter>
            <VStack>
              <Button variant='solid' colorScheme='orange'>
                <Link to='/contact'>
                  ENQUIRE NOW
                </Link>
              </Button>

              <HStack>
                <FaUser />
                <Text fontWeight={'bolder'}>Abhinav </Text>
              </HStack>
              <HStack>
                <FaPhone />
                <Text fontWeight={'bolder'}>8363###3331</Text>
              </HStack>
            </VStack>
          </CardFooter>
        </Stack>
      </Card>
    </section>
  )
}

export default Hero4