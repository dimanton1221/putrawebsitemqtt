import { useState, useEffect } from "react";
import io from "socket.io-client";
const App = () => {
  // const [socket, setSocket] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const socket = io("http://localhost:3000");
  socket.on("connect", () => {
    console.log("connected");
  });

  


  return <></>;
};

export default App;
