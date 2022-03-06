import React, { useEffect, useState } from "react";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async function () {
      const result = await axios("https://jsonplaceholder.typicode.com/users");
      //   let c = await result.json();
      setUsers(result.data);
      console.log(result);
    })();
  }, []);

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
