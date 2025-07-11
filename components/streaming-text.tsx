import React, { useEffect, useState } from "react";

interface StreamingTextProps {
  text: string;
  speed?: number; // ms per character
}

export const StreamingText: React.FC<StreamingTextProps> = ({ text, speed = 20 }) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    setDisplayed("");
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text[i]);
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return <pre>{displayed}</pre>;
};
