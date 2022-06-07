import Stomp from "stompjs";
import SockJS from "sockjs-client";

var stompClient=null;

export default class SocketBuilder {

  stompClient = null;

  constructor(){
    var socket = new SockJS("http://localhost:8080/stomp-endpoint");
    this.stompClient = Stomp.over(socket);
  }

  connect = async (setConnected, setMessage) => {
    var socket = new SockJS("http://localhost:8080/stomp-endpoint");
    stompClient = Stomp.over(socket);
    stompClient.connect({"user":"username"}, function (frame) {
      setConnected(true);
      console.log("Connected: " + frame);
    stompClient.subscribe("/topic/greetings", function (greeting) {
        setMessage(JSON.parse(greeting.body));
      });
    });
    this.stompClient=stompClient;
  };

  disconnect() {
    if (this.stompClient !== null) {
      this.stompClient.disconnect();
    }
    console.log("Disconnected");
  }

  sendName(name) {
    this.stompClient.send("/app/hello", {}, JSON.stringify({ name: name }));
  }
}
