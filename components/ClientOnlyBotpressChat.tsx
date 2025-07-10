"use client";

import dynamic from 'next/dynamic';
import React from 'react';

const BotpressChat = dynamic(() => import('./BotpressChat'), { ssr: false });

const ClientOnlyBotpressChat: React.FC = () => {
  return <BotpressChat />;
};

export default ClientOnlyBotpressChat;
