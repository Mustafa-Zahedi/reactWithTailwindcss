import React, { Fragment, useState } from "react";
import useDocumentTitle from "./useDocumentTitle";

function Counter(props) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useDocumentTitle(`${name} has clicked ${count} times`);

  return (
    <Fragment>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <div>
        {name} clicked {count} times
      </div>
      <button onClick={() => setCount(count + 1)}>increas</button>
    </Fragment>
  );
}

export default Counter;
