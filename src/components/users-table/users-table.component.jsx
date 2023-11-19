import { useContext, useState, useEffect } from "react";
import { UserDataContext } from "../../contexts/users.context";
import "./users-table.styles.scss";
import SearchBox from "../search-box/search-box.component";
const UsersTable = () => {
  const { usersData } = useContext(UserDataContext);
  const [searchData, setSearchData] = useState(usersData);
  const [searchField, setSearchField] = useState("");
  const onSubmitChange = (event) => {
    if (event.key === "Enter") {
      const searchString = event.target.value.toLocaleLowerCase();
      setSearchField(searchString);
    } else if (event.target.value.length === 0) {
      setSearchField("");
    }
  };
  useEffect(() => {
    if (searchField.length === 0) {
      setSearchData(usersData);
      return;
    }
    const newfilteredProducts = usersData.filter((user) =>
      (user.username + user.email + user.phone + user.createdAt)
        .toLowerCase()
        .includes(searchField)
    );
    setSearchData(newfilteredProducts);
  }, [searchField, usersData]);

  console.log(usersData);
  return (
    <div className="users-table-container">
      <div className="users-table-title">Greenie Users</div>
      <SearchBox
        placeholder={"search users"}
        onSubmitHandler={onSubmitChange}
      />
      <table className="users-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Created At</th>
          </tr>
        </thead>
        {searchData.length === 0 && searchField.length > 0 ? (
          <tbody>
            <tr>
              <td colSpan="4">No users found</td>
            </tr>
          </tbody>
        ) : null}
        <tbody>
          {searchData.map((user) => (
            <tr key={user.username} className="values">
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.createdAt.toString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default UsersTable;
