import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
  useToast,
  HStack,
  Heading,
  Text,
  Stack
} from "@chakra-ui/react";

const Contact = () => {
 const [name,setname] = useState(null);
 const [phone,setphone] = useState(null);
 const [email,setemail] = useState(null);
const [msg,setmsg] = useState(null);
const [location,setlocation] = useState(null);

 
  const  handleSubmit = () => {
    // Replace '123456789' with the recipient's phone number
    const phoneNumber = '7292014837';

    // Replace 'Hello, how can I help you?' with your desired message
    
   
const senddata = `hello! I am ${name}\n and ${msg} Contact me on \n ${phone}\n ${email} `;

// Construct the WhatsApp API URL

const whatsappBaseUrl = 'https://api.whatsapp.com/send';
    
   
const encodedMessage = encodeURIComponent(senddata);
    const whatsappUrl = `${whatsappBaseUrl}?phone=${phoneNumber}&text=${encodedMessage}`;

    // Redirect to WhatsApp
    window.location.href = whatsappUrl;

  
  }





  return (
    <VStack w={'full'} m={4} alignItems={'center'} bgImage={''} mt={['25vh','20vh']}>
        <VStack my={4} justifyContent={'center'} alignItems={'center'} >
        <Heading letterSpacing={'widest'}>Upload Your Property</Heading>
        <Text fontSize={'xl'} w={['100%','50%']} textAlign="center">
</Text>
        </VStack>
        <VStack alignItems={'start'}>
  <Stack direction={['column','row']} spacing={4}>
    <Input type="text" placeholder='Property name..' value={name} onChange={(e)=>setname(e.target.value)} />
    <Input type='email' placeholder='Area in sq ft..' value={email} onChange={(e)=>setemail(e.target.value)} />
    <Input type='number' placeholder='Price..' value={phone} onChange={(e)=>setphone(e.target.value)}/>
    <Input type='text' placeholder='Location..' value={location} onChange={(e)=>setlocation(e.target.value)}/>
  </Stack>

  <FormLabel>Description</FormLabel>
  <Textarea placeholder='Write your short description about the property..' size='lg' value={msg} onChange={(e)=>setmsg(e.target.value)} />

  {/* Add Photos Button */}
  <Button variant="outline" colorScheme='blue' as="label">
    Add Photos
    <Input type="file" multiple accept="image/*" hidden  />
  </Button>

  <Button variant="solid" colorScheme='orange' onClick={handleSubmit} px={4}>Send</Button>
</VStack>

    </VStack>
  );
};

export default Contact;
