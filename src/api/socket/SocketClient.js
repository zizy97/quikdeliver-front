import React, { useState, useEffect } from "react";
import SockJsClient from "react-stomp";
import axios from "axios";

const SOCKET_URL = "https://localhost:8080/stomp-endpoint";

export default function SocketClient() {
    const [message, setMessage] = useState("Hello from");

    const [msgarr, setmsgarr] = useState([]);
 
    let onConnected = () => {
       console.log("Connected!!");
    };
 
    let onDisconnected = () => {
       console.log("DisConnected!!");
    };
 
    let onMessageReceived = (msg) => {
       setMessage(msg.data);
       getNotification();
    };
 
    const getNotification = () => {
       axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
          const persons = res.data;
          console.log(persons);
       });
    };
 
    useEffect(() => {
       setmsgarr([...msgarr, message]);
    }, [message]);
 
    return (
       <div>
          <SockJsClient
             url={SOCKET_URL}
             topics={["/topic/greetings"]}
             onConnect={onConnected}
             onDisconnect={onDisconnected}
             onMessage={(msg) => onMessageReceived(msg)}
             debug={false}
          />
          <div>
             {message}
          </div>
       </div>
    );
}
