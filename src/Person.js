import React from 'react';

function Person({ per }) {
  return (
    <h2>
      I am {per.name}. my Age is {per.age} and I know {per.skill}
    </h2>
  );
}

export default Person;
