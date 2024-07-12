import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { Aboutus } from '~/_components/AboutUs';
import { Courses } from '~/_components/Courses';
import { FAQ } from '~/_components/FAQs';
import { AddRequest } from '~/_components/AddRequest';
import getBotResponse from './getBotResponse'; 
import TypewriterMsg from './TypewriterMsg'; 

export const ChatBot: React.FC = () => {
    // State to track chat messages
    const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
    const [input, setInput] = useState<string>('');
    // States to control the visibility of all components
    const [showAboutus, setShowAboutus] = useState<boolean>(false);
    const [showCourses, setShowCourses] = useState<boolean>(false);
    const [showFAQ, setShowFAQ] = useState<boolean>(false);
    const [showAddRequest, setShowAddRequest] = useState<boolean>(false);
    const [showGreeting, setShowGreeting] = useState<boolean>(true);

    // Ref to keep track of the end of the messages container
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setTimeout(() => setShowAboutus(true), 4000); // Show Aboutus after 4 seconds
        setTimeout(() => setShowCourses(true), 5000); // Show Courses after 5 second
        setTimeout(() => setShowFAQ(true), 6000); // Show FAQ after 6 seconds
        setTimeout(() => setShowAddRequest(true), 7000); // Show AddRequest after 7 seconds
    }, []);
    // Hide greeting after 10 seconds
    useEffect(() => {
      const timer = setTimeout(() => setShowGreeting(false), 10000); 
      return () => clearTimeout(timer); // Cleanup the timer
    }, []);
    
  // Function to handle sending a message
const handleSendMessage = async() => {
    if (input.trim()) { // Check if input is not empty
      const userMessage = { sender: 'User', text: input };
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setInput(''); // Clear the input field
      // Get bot response from API
      const response = await getBotResponse(input);
      if (response?.candidates && response.candidates.length > 0 && response.candidates[0]?.content?.parts) {
          const botResponse = response.candidates[0].content.parts.map(part => part.text).join('\n\n');
          const botMessage = { sender: 'Chatbot', text: botResponse };
          setMessages((prevMessages) => [...prevMessages, botMessage]);
      } else {
          console.error("Invalid response from API:", response);
      }
        setInput(''); 
    }
  }
    // Function to scroll to the bottom of the message container
    const scrollToBottom = () => {
      if (messagesEndRef.current) {
          messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
     }
    };
    // Effect to scroll to the bottom whenever messages change
    useEffect(() => {
      scrollToBottom();
  }, [messages]); 

  return (
    <div className="flex max-w-s flex-col mb-4"
    style={{
      maxHeight: '400px', 
      overflowY: 'auto', 
      backgroundColor: 'rgb(229 231 235)',
      padding: '1px', 
      borderRadius: '8px', 
      width: '100%',
  }}
    >
      {/* Greeting message with Typewriter effect */}
      <div className="mb-3">
      {showGreeting && (
        <h3 className="text-l">
        <TypewriterMsg
          text="Hi, I’m BearBot, your robot assistant. Please select any topic for more information."
          pace={() => 40}
      />
        </h3>
      )}
      </div>
      {/* Components shown after delays */}
      {showAboutus && (
        <div className="transition duration-500 ease-in-out transform opacity-0 translate-y-5 animate-fade-in">
            <Aboutus />
        </div>
      )}
      {showCourses && (
          <div className="transition duration-500 ease-in-out transform opacity-0 translate-y-5 animate-fade-in">
              <Courses />
          </div>
      )}
      {showFAQ && (
          <div className="transition duration-500 ease-in-out transform opacity-0 translate-y-5 animate-fade-in">
              <FAQ />
          </div>
      )}
      {showAddRequest && (
          <div className="transition duration-500 ease-in-out transform opacity-0 translate-y-5 animate-fade-in">
              <AddRequest />
          </div>
      )}
    {/* This section is displaying chat messages */}
      <div className="flex flex-col" >
        {messages.map((message, index) => (
          <div
          key={index}
          className='max-h-screen overflow-y-auto'
          style={{ 
            maxWidth: '40rem',
            padding: '0.65rem',
            borderRadius: '0.5rem',
            marginBottom: '0.5rem',
            color: 'white',
            backgroundColor: message.sender === 'Chatbot' ? 'rgb(156 163 175)' : 'rgb(96 165 250)',
            alignSelf: message.sender === 'Chatbot' ? 'flex-start' : 'flex-end'
        }}>
            {/* Displaying message with Typewriter effect for bot messages */}
              {message.sender === 'Chatbot' ? (
                  <TypewriterMsg text={message.text} pace={() => 60} />
              ) : (
                  message.text
              )}
        </div>))}
    </div>
    <div ref={messagesEndRef} />
      <div className="flex-auto mt-4">
        {/* Input field and send button */}
        <input
          type="text"
          className="border-2 border-blue-900 text-black"
          name="text1"
          value={input}
          placeholder='Start chat with BearBot'
          onChange={(e) => setInput(e.target.value)}
          style={{
            color: 'black',       
            backgroundColor: 'white', 
            width: '75%',        
            padding: '5px',      
            borderRadius: '6px', 
          }} 
        />
        <button
          onClick={handleSendMessage}
          type="submit" 
          className=" bg-white/10 font-semibold border-2 border-blue-900"
          style={{
            color: 'black',       
            backgroundColor: 'white', 
            width: '20%',        
            padding: '5px',      
            borderRadius: '6px', 
            marginLeft: '10px'
          }} 
          >
          Send
        </button>
      </div>
    </div>
  );
};