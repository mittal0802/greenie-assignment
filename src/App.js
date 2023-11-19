import "./App.css";
import { lazy, Suspense } from "react";
import Footer from "./components/footer/footer.component";
import Navbar from "./components/navbar/navbar.component";

// lazy load dashboard component

const Dashboard = lazy(() =>
  import("./components/dashboard/dashboard.component")
);

function App() {
  return (
    <div className="App">
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Dashboard />
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
