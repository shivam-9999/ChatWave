import styles from "./styles.module.css";
import MessagesReceived from "./Messages";
import SendMessage from "./send-message";
import RoomAndUsersColumn from "./room-and-users";

const Chat = ({ username, socket, room }) => {
  return (
    <div className={styles.chatContainer}>
      {/* Add this */}
      <RoomAndUsersColumn socket={socket} username={username} room={room} />
      <div>
        <MessagesReceived socket={socket} room={room} />
        <SendMessage socket={socket} username={username} room={room} />
      </div>
    </div>
  );
};

export default Chat;
