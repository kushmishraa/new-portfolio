interface typingEffectProps {
  message : String
}

import React, {useState, useEffect} from "react";

const TypingEffect: React.FC<typingEffectProps> = ({message}) => {
  const [typingMsg, setTypingMsg] = useState("");

  const typingEffect = () => {
    let tempMsg = "";
    let msgLength = message.length;
    let index = 0;
    const interval = setInterval(() => {
      if (tempMsg.length == msgLength) {
        clearInterval(interval);
        return;
      }
      tempMsg = tempMsg + message[index]
      setTypingMsg(tempMsg);
      index++;
    }, 120);
  };

  useEffect(() => {
    typingEffect();
  }, []);

  return <>{typingMsg}</>;
};

export default TypingEffect;
