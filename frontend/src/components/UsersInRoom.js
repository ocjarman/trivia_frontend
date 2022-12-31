import React from "react";

const UsersInRoom = ({ users, roomId }) => {
  return (
    <>
      {users ? (
        <div>
          <h3>
            {users.length} player(s) in Room {roomId}
          </h3>
          {users.map((user, i) => (
            <p key={i}>{user.name} </p>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default UsersInRoom;
