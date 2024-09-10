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
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import {
  FaUpload,
  FaSearch,
  FaHome,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { FaHouse } from "react-icons/fa6";

const Header = ({ searchQuery, setSearchQuery, placeholderText = "Search by Name" }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  // Function to handle logout
  const handleLogout = () => {
    // Clear any authentication tokens or user data
    // e.g., localStorage.removeItem('token');
    // Navigate to the login page
    navigate("/login");
  };

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
      {/* Left side: Logo */}
      <HStack spacing={4} flex="1">
        <Link to="/home">
          <Heading fontSize={'32px'}>𝓣𝓱𝓮 𝓝𝓮𝔁𝓽 𝓗𝓸𝓶𝓮𝓼</Heading>
        </Link>
      </HStack>
      
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
        {/* <Link to="/gallery">
          <HStack mx={4} className="navlink">
            <FaPhotoVideo /> <Text>Gallery</Text>
          </HStack>{" "}
        </Link> */}
        <Link to="/contact">
          <HStack mx={4} className="navlink">
            <FaUpload /> <Text>Post Property</Text>
          </HStack>{" "}
        </Link>
        {/* Logout Link */}
        <Link to="/login" onClick={handleLogout}>
          <Text color="orange.500" mx={4} fontWeight="bold" letterSpacing={2} >Logout</Text>
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
            <Heading textColor={'white'} fontSize={'md'}>𝓣𝓱𝓮 𝓝𝓮𝔁𝓽 𝓗𝓸𝓶𝓮𝓼</Heading>
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={12} onClick={onClose}>
              <Link to="/home">
                <HStack mx={4} className="navlink">
                  <FaHome /> <Text>Home</Text>
                </HStack>{" "}
              </Link>
              <Link to="/properties">
                <HStack mx={4} className="navlink">
                  <FaHouse /> <Text>Properties</Text>
                </HStack>{" "}
              </Link>
              {/* <Link to="/gallery">
                <HStack mx={4} className="navlink">
                  <FaPhotoVideo /> <Text>Gallery</Text>
                </HStack>{" "}
              </Link> */}
              <Link to="/contact">
                <HStack mx={4} className="navlink">
                  <FaUpload /> <Text>Post Property</Text>
                </HStack>{" "}
              </Link>
              <Link to="/login" onClick={handleLogout}>
                <Text color="orange.500" mx={4} fontWeight="bold">Logout</Text>
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Header;
