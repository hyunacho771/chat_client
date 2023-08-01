//App.js
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.js";
import Chat from "./pages/Chat.js";
import Sidebar from "./components/Sidebar.js";
import { useStateValue } from "./StateProvider.js";
import { actionTypes } from "./actionTypes.js";
import { useEffect } from "react";
import axios from "./axios.js";
import Pusher from "pusher-js";
import { useState } from "react";
// function App() {
//   return (
//     <div className="app">
//       <Router>
//         <Routes>
//           <Route exact path="/" element={Login} />
//           <Route path="/rooms/:roomId" element={Chat} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }
// export default App;

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("/messages/sync").then((response) => {
      setMessages(response.data);
    });
  }, []);
  useEffect(() => {
    const pusher = new Pusher("eba7e7f22153494db15f", {
      cluster: "ap2",
    });
    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (newMessage) => {
      setMessages([...messages, newMessage]);
      // alert(JSON.stringify(newMessage));
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  );
}
export default App;
