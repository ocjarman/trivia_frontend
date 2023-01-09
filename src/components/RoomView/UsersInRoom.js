import React from "react";
import styles from "./Room.styles";
const UsersInRoom = ({ users, roomId }) => {
  return (
    <>
      {users ? (
        <div>
          <h3>
            {users.length} player(s) in Room {roomId}
          </h3>
          {users.map((user, i) => (
            <span key={i} style={styles.sx.EachUser}>
              {user.name}{" "}
            </span>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default UsersInRoom;
