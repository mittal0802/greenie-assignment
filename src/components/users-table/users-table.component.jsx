import { useContext, useState, useEffect } from "react";
import { UserDataContext } from "../../contexts/users.context";
import "./users-table.styles.scss";
import SearchBox from "../search-box/search-box.component";
const UsersTable = () => {
  const { usersData } = useContext(UserDataContext);
  const [searchData, setSearchData] = useState(usersData);
  const [searchField, setSearchField] = useState("");
  const onSubmitChange = (event) => {
    if (event.key === "Enter" || event.target.value.length === 0) {
      const searchString = event.target.value.toLocaleLowerCase();
      setSearchField(searchString);
    }
  };
  useEffect(() => {
    if (searchField.length === 0) return;
    const newfilteredProducts = usersData.filter((user) =>
      (user.username + user.phone + user.email + user.createdAt)
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
