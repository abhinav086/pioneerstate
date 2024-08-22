import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";


const MakerCard = ({ img,  name,desc }) => {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      w={["100%", "80%"]}
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "400px" }}
        src={img}
        alt="Caffe Latte"
      />

      <Stack>
        <CardBody>
          <Heading size="md">{name}</Heading>
         
          <Text py="2">
          {desc}
          </Text>
        </CardBody>
      </Stack>
    </Card>
  );
};

const Makers = () => {
  return (
    <VStack padding={8}>
      <Heading
        w={"full"}
        textAlign={"center"}
        padding={4}
        color={'#914F1E'} bgColor={'#DEAC80'}
        rounded={"lg"}
        letterSpacing={"widest"}
      >
        Our Happy Clients
      </Heading>
      <MakerCard
        img={'https://kleosafrica.com/blog/wp-content/uploads/2019/10/customers.jpg'}
        
        name={"Mr Abhinav"}
        desc={
          "I Am Using Products Of Pioneer From Last 3 Years. Service of Property  Is Very Good. I Love To Use Its Products, And Would Surely Use It In The Future Too."
        }
      />
  
    </VStack>
  );
};

export default Makers;
