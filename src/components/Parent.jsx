import React from "react";

// props = properties
const Parent = ({ children, color }) => {
  console.log({ color });
  console.log(children);
  return <div>Parent</div>;
};

export default Parent;
