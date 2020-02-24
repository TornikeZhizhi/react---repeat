import React from "react";

const userinput = props => {
  return (
    <div>
      <input
        onChange={props.click}
        value={props.currentName}
        type="text"
        placeholder="i am user input"
      />
    </div>
  );
};

export default userinput;
