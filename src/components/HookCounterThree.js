import React, { useState } from "react";

function HookCounterThree() {
  const [name, setName] = useState({ firstName: " ", lastName: " " });
  return (
    <form>
      <input
        value={name.firstName}
        type="text"
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <input
        value={name.lastName}
        type="text"
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <h2>First Name - {name.firstName}</h2>
      <h2>Last Name - {name.lastName}</h2>
      <h2>{JSON.stringify(name)}</h2>
    </form>
  );
}

export default HookCounterThree;
