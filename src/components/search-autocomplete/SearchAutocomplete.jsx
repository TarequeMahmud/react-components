import { useEffect, useState } from "react";

export default function SearchAutocomplete() {
  // const [loading, setLoading] = useState(false);

  const [users, setUsers] = useState([]);
  const [searchParam, setSearchParem] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  async function fetchList() {
    try {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      if (data && data.users && data.users.length > 0) {
        setUsers(data.users.map((user) => user.firstName));
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchList();
  }, []);

  const handleChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchParem(query);
    const filteredData =
      users && users.length
        ? users.filter((user) => user.toLowerCase().indexOf(query) > -1)
        : [];
    setFilteredUsers(filteredData);
  };

  return (
    <div className="search-autocomplete-container">
      <input
        type="text"
        name="search"
        placeholder="search here"
        onChange={handleChange}
      />
      <ul>
        {filteredUsers.map((user) => (
          <li>{user}</li>
        ))}
      </ul>
    </div>
  );
}
