interface typingEffectProps {
  message: String
}

import React, { useState, useEffect, useRef } from "react";
import { Fade } from "react-awesome-reveal";

const TypingEffect: React.FC<typingEffectProps> = ({ message }) => {
  const [typingMsg, setTypingMsg] = useState("");
  const [showBlinker, setBlinker] = useState(true)

  const typingEffect = () => {
    let tempMsg = "";
    let msgLength = message.length;
    let index = 0;
    let tempBlinker = true
    const interval = setInterval(() => {
      if (tempMsg.length == msgLength) {
        clearInterval(interval);
        setBlinker(false)
        return;
      }
      tempMsg = tempMsg + message[index]
      setTypingMsg(tempMsg);
      tempBlinker = !tempBlinker;
      setBlinker(tempBlinker)
      index++;
    }, 120);
  };

  const blinkerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    typingEffect();
  }, []);

  return (
    <div className="flex gap-[10px]">
      <span>{typingMsg}</span>{showBlinker && <span className="transition delay-75">_</span>}
    </div>
  )
};

export default TypingEffect;
