import React from "react";

function RightChatBubble({ message }) {
  return (
    <>
      <div className="message-bubble mbr">
        <img src={"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"} style={styles.avatar} alt="sender-pic" />{" "}
        <div className="right-bubble ">
          <div className="text-message">
            {/* <p className="name">{name}</p> */}
            <p className="message">{message.text}</p>
            <span className="message-timestamp">{message.timestamp}</span>
          
          </div>
          <div className="bubble-arrow bubble-arrow-alt"></div>
        </div>
      </div>
    </>
  );
}
const styles = {
  avatar: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    margin: "0 10px",
  },
};
export default RightChatBubble;