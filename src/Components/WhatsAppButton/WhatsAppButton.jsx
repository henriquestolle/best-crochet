// WhatsAppButton.js
import React from "react";
import "./WhatsAppButton.css";

const WhatsAppButton = () => {
  const whatsappUrl = "https://wa.me/5547988883180";
  const message = "Olá, tenho interesse em alguns produtos da loja.";
  return (
    <a
      href={`${whatsappUrl}?text=${encodeURIComponent(message)}`}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="whatsapp-icon"
      >
        <path
          d="M16 1.3c8.3 0 15 6.7 15 15 0 8.3-6.7 15-15 15-2.6 0-5.1-.7-7.3-2l-7.6 2 2-7.6C1 21.1.3 18.6.3 16 0 8.7 6.7 1.3 16 1.3zm0-1.3C7.2 0 0 7.2 0 16c0 2.8.7 5.4 2 7.8L0 32l8.2-2.2c2.3 1.4 5 2.2 7.8 2.2 8.8 0 16-7.2 16-16S24.8 0 16 0zm7.4 21.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.3-.1-.5.1-.1.2-.6.7-.8.9-.1.2-.3.2-.5.1-.2-.1-.8-.3-1.6-.9-1.3-1.1-2.2-2.4-2.5-2.8-.3-.5-.3-.6 0-.9.2-.3.3-.4.5-.7.1-.1.1-.2.2-.4.1-.2 0-.3 0-.4-.1-.1-.5-1.2-.7-1.7-.2-.5-.4-.4-.5-.4h-.4c-.2 0-.4 0-.7.2-.2.1-.7.3-1.1.7-.4.4-.7 1-.7 1.5s.7 1.8.8 2c.1.2 1.4 2.2 3.5 3.2 2 .9 2.1.6 2.5.5.3-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2z"
          fill="#fff"
        />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
