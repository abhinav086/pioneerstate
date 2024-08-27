import React from "react";
import {
  Flex,
  HStack,
  Text,
  Heading,
  VStack,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Box,
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import {
  FaPhotoVideo,
  FaUpload,
  FaSearch,
  FaHome,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { FaHouse } from "react-icons/fa6";

const Header = ({ searchQuery, setSearchQuery, placeholderText = "Search by Name" }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const headerStyle = {
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)", // Adjust the pixel value as needed
  };

  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      borderBottom="1px solid"
      borderColor="gray.200"
      position="fixed"
      top="0"
      w="full"
      zIndex="1"
      style={headerStyle}
      px={8}
      py={4}
    >
      <Stack direction={['column','row']} spacing={4} flex="1">
        <Link to="/">
          <Heading fontSize={'32px'}>𝕻𝖎𝖔𝖓𝖊𝖊𝖗 𝕰𝖘𝖙𝖆𝖙𝖊</Heading>
        </Link>
        {/* Search Bar */}
        <InputGroup maxW="md" mx="auto">
          <InputLeftElement pointerEvents="none">
            <FaSearch color="gray.300" />
          </InputLeftElement>
          <Input
            placeholder={placeholderText}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            borderRadius="full"
            variant="outline"
            focusBorderColor="teal.500"
          />
        </InputGroup>
      </Stack>
      {/* Navigation links */}
      <Flex
        display={{ base: "none", md: "flex" }}
        mr={8}
        fontSize={"xl"}
        align="center"
      >
        <Link to="/properties">
          <HStack mx={4} className="navlink">
            <FaHouse /> <Text>Properties</Text>
          </HStack>{" "}
        </Link>
        <Link to="/gallery">
          <HStack mx={4} className="navlink">
            <FaPhotoVideo /> <Text>Gallery</Text>
          </HStack>{" "}
        </Link>
        <Link to="/contact">
          <HStack mx={4} className="navlink">
            <FaUpload /> <Text>Post Property</Text>
          </HStack>{" "}
        </Link>
      </Flex>
      {/* Hamburger menu for mobile */}
      <Box mr={4} display={["flex", "none"]}>
        <MdMenu size={36} onClick={onOpen} />
      </Box>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent fontSize={'24'} textColor={'white'} style={{backgroundColor:'rgba(0,0,0,0.6)'}} >
          <DrawerCloseButton fontSize={'24'} />
          <DrawerHeader>
           <Heading textColor={'white'} fontSize={'md'}>𝕻𝖎𝖔𝖓𝖊𝖊𝖗 𝕰𝖘𝖙𝖆𝖙𝖊</Heading>
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={12} onClick={onClose}>
              <Link to="/">
                <HStack mx={4} className="navlink">
                  <FaHome /> <Text>Home</Text>
                </HStack>{" "}
              </Link>
              <Link to="/properties">
                <HStack mx={4} className="navlink">
                  <FaHouse /> <Text>Properties</Text>
                </HStack>{" "}
              </Link>
              <Link to="/gallery">
                <HStack mx={4} className="navlink">
                  <FaPhotoVideo /> <Text>Gallery</Text>
                </HStack>{" "}
              </Link>
              <Link to="/contact">
                <HStack mx={4} className="navlink">
                  <FaUpload /> <Text>Post Property</Text>
                </HStack>{" "}
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Header;
