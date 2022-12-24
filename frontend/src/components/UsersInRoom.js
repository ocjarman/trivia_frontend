import React from "react";

const UsersInRoom = ({ users }) => {
  return (
    <div className="textContainer">
      {users ? (
        <div>
          <h6>People currently chatting:</h6>
          <div>
            <p>
              {users.map((user, i) => (
                <span key={i}>{user.name}, </span>
              ))}
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default UsersInRoom;
