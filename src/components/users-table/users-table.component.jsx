import { useContext } from "react";
import { UserDataContext } from "../../contexts/users.context";
import "./users-table.styles.scss";
import SearchBox from "../search-box/search-box.component";
const UsersTable = () => {
  const { usersData } = useContext(UserDataContext);
  console.log(usersData);
  return (
    <div className="users-table-container">
      <div className="users-table-title">Greenie Users</div>
      <SearchBox />
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
          {usersData.map((user) => (
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
