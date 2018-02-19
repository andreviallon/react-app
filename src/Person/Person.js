// import React, { Component } from "react";

// class Person extends Component {
//   render() {
//     return (
//       <div>
//         <p>Im a person</p>
//       </div>
//     );
//   }
// }

// export default Person;

import React, { Component } from "react";

const person = props => {
  return (
    <div>
      <p>
        I'm {props.name} and I am {props.age} years old.
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default person;