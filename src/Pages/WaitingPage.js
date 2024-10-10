import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WaitingPage = () => {
  const navigate = useNavigate();
  
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "CSARABIA"; // The text that will be typed out

  // Function to handle typing effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + fullText[index]); // Add one letter at a time
      index++;
      if (index === fullText.length) {
        clearInterval(interval); // Stop the interval once typing is complete
        // Redirect to home after typing is complete (2 seconds after)
        setTimeout(() => {
          navigate("/"); // Navigate to the Home page or desired route
        }, 2000); // Delay to allow for a brief pause after typing
      }
    }, 150); // Typing speed (150ms per letter)
    
    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [navigate]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-primary">{displayedText}</h1>
    </div>
  );
};

export default WaitingPage;
