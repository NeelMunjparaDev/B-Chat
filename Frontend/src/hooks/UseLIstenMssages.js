import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../store_zustand/useConversation";

// import sentSound from "../assets/iphone_send_sms.mp3";
import recevieSound from "../assets/short_bongo.mp3";

// import { useAuthContext } from "../context/AuthContext";

const UseLIstenMssages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();

  //   const { authUser } = useAuthContext();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      newMessage.shouldShake = true;

      const sound = new Audio(recevieSound);
      sound.play();

      setMessages([...messages, newMessage]);
    });

    return () => socket?.off("newMessage");
  }, [socket, setMessages, messages]);
};

export default UseLIstenMssages;
