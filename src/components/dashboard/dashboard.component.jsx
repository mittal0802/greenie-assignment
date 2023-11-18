import "./dashboard.styles.scss";
import UserCreationForm from "../user-creation-form/user-creation-form.component";
import Navbar from "../navbar/navbar.component";
import Footer from "../footer/footer.component";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Navbar />
      <UserCreationForm />
      <Footer />
    </div>
  );
};

export default Dashboard;
