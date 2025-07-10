"use client";

import React, { useState } from 'react';
import { Fab, Webchat } from '@botpress/webchat';

const BotpressChat: React.FC = () => {
  const [isWebchatOpen, setIsWebchatOpen] = useState(false);

  const toggleWebchat = () => {
    setIsWebchatOpen((prevState) => !prevState);
  };

  return (
    <>
      {isWebchatOpen && (
        <Webchat
          clientId="c7647d4d-f2b9-48bd-883b-5a856d972f67" // Replace with your Botpress client ID
          style={{
            width: '400px',
            height: '600px',
            position: 'fixed',
            bottom: '90px',
            right: '20px',
            zIndex: 1000,
          }}
        />
      )}
      <Fab 
        onClick={toggleWebchat} 
        style={{ 
          position: 'fixed', 
          bottom: '20px', 
          right: '20px',
          zIndex: 1000,
          width: 56,
          height: 56,
          minWidth: 56,
          minHeight: 56,
          maxWidth: 56,
          maxHeight: 56,
          borderRadius: '50%',
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
        }} 
      />
    </>
  );
};

export default BotpressChat;
