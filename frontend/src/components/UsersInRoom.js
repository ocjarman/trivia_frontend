import React from "react";

const UsersInRoom = ({ users }) => {
  return (
    <>
      {users ? (
        <div>
          <h6>People currently chatting:</h6>
          {users.map((user, i) => (
            <span key={i}>{user.name} </span>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default UsersInRoom;
