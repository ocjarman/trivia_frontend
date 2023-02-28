import React from "react";
import "./roomView.css";

const UsersInRoom = ({ users, roomId }) => {
  return (
    <>
      {users ? (
        <div>
          <h3>
            {users.length} player(s) in Room {roomId}
          </h3>
          {users.map((user, i) => (
            <span key={i} className="eachUser">
              {user.name}{" "}
            </span>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default UsersInRoom;
