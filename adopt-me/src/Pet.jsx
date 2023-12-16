// import React from "react";
// const Pet = (props) => {
//     return React.createElement("div", {}, [
//       React.createElement("h1", {}, props.name),
//       React.createElement("h2", {}, props.animal),
//       React.createElement("h3", {}, props.breed),
//     ]);
//   };

const Pet = (props) => {
  // Implicitly this also calls React.createElement
  return (
    <div>
      <h1> {props.animal} </h1>
      <h2> {props.name} </h2>
      <h3> {props.breed} </h3>
    </div>
  );
};

export default Pet;
