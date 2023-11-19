import "./App.css";
import Dashboard from "./components/dashboard/dashboard.component";
import Footer from "./components/footer/footer.component";
import Navbar from "./components/navbar/navbar.component";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
