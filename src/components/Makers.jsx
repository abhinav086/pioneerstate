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
        bgColor={"#fdba74"}
        rounded={"lg"}
        letterSpacing={"widest"}
      >
        Our Happy Clients
      </Heading>
      <MakerCard
        img={'https://media.licdn.com/dms/image/C5612AQHbhgqosPUvZA/article-cover_image-shrink_600_2000/0/1520155646670?e=2147483647&v=beta&t=7fk4PlOR_Tet5UbNbqYPJM_KAu6JVmuj7hWZp9pjdgs'}
        
        name={"Mr Abhinav"}
        desc={
          "I Am Using Products Of Pioneer From Last 3 Years. Service of Property  Is Very Good. I Love To Use Its Products, And Would Surely Use It In The Future Too."
        }
      />
  
    </VStack>
  );
};

export default Makers;
