import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const ChatButton = () => {
  const style = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    zIndex: "1000", // Ensure it's above other elements
    cursor: "pointer",
    backgroundColor: "green",
    color: "white",
    borderRadius: "50%",
    padding: "15px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  };

  
  const  handleClick = () => {
    // Replace '123456789' with the recipient's phone number
    const phoneNumber = '8800464310';

    // Replace 'Hello, how can I help you?' with your desired message
    
   
const message = 'Message from PIONEER  website';

// Construct the WhatsApp API URL

const whatsappBaseUrl = 'https://api.whatsapp.com/send';
    
   
const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `${whatsappBaseUrl}?phone=${phoneNumber}&text=${encodedMessage}`;

    // Redirect to WhatsApp
    window.location.href = whatsappUrl;
  }

  return (
    <div style={style} onClick={handleClick}>
      <FaWhatsapp size={28} />
    </div>
  );
};

export default ChatButton;
