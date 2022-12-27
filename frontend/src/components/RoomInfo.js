import React from "react";
import { useSelector } from "react-redux";

const RoomInfo = ({ room }) => {
  return (
    <div>
      <div>
        <h3>Room: {room}</h3>
      </div>
    </div>
  );
};

export default RoomInfo;
