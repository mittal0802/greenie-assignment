import "./dashboard.styles.scss";
import UserCreationForm from "../user-creation-form/user-creation-form.component";
import UsersTable from "../users-table/users-table.component";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <UsersTable />
      <UserCreationForm />
    </div>
  );
};

export default Dashboard;
