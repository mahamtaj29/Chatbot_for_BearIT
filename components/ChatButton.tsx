"use client";
import React from 'react'
import { useState } from 'react';
import { ChatBot } from './ChatBot';

export const ChatButton: React.FC = () => {
    const [openChat, setOpenChat] = useState(false);

    // Function to open chat window upon clicking
    const openChatBot = () => {
        setOpenChat(!openChat); // True = !openchat // if else condition.
    };

  return (
    <div>
      {!openChat && (
        <button className="rounded-md bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20"
        onClick={openChatBot}> 
        Start Chat 
        </button> 
      )}
    {/* It will open the ChatWindow when openChat value is true. */}
    { openChat && <ChatBot />}
    </div>
  )
}
