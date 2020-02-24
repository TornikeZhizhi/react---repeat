import React from "react";

const useroutput = props => {
  return (
    <div>
      <p>hi am {props.name}</p>
      <p>hi am state {props.statename}</p>
    </div>
  );
};

export default useroutput;
