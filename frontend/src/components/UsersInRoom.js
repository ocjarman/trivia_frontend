import React from "react";

const UsersInRoom = ({ users }) => {
  return (
    <>
      {users ? (
        <div>
          <h6>People currently chatting:</h6>
          {users.map((user, i) => (
            <p key={i}>{user.name} </p>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default UsersInRoom;
