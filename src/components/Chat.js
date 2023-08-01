//
// Path: copilot_test\src\Chat.js
// Compare this snippet from copilot_test\src\App.js:
//
// messenger app like whatsapp web with reacjs in frontend and nodejs in backend: Chat.js
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import axios from "../axios";
import { useState } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import "./Chat.css";
function Chat({ messages }) {
  const [input, setInput] = useState("");
  const sendMessage = async (e) => {
    try {
      axios
        .post("/messages/new", {
          message: input,
          name: "Demo App",
          timestamp: Date.now(),
          received: false,
        })
        .then((response) => {
          setInput("");
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        {messages.map((message) => (
          <p
            className={`chat__message ${message.received && "chat__receiver"}`}
          >
            <span className="chat__name">{message.name}</span>
            {message.message}
            <span className="chat__timestamp">{message.timestamp}</span>
          </p>
        ))}
      </div>
      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
            type="text"
          />
          <button onClick={sendMessage} type="submit">
            Send a message
          </button>
        </form>
      </div>
    </div>
  );
}
export default Chat;
