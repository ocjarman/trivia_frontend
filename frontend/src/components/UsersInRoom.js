import React from "react";

const UsersInRoom = ({ users }) => {
  const userBoxStyles = {
    border: "2px solid black",
    margin: "10px",
  };

  console.log({ users });
  return (
    <div className="textContainer" style={userBoxStyles}>
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
