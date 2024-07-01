import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./layout/Navbar";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUsers from "./controllers/AddUsers";
import EditUsers from "./controllers/EditUsers";
import ViewUsers from "./controllers/ViewUsers";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/adduser" element={<AddUsers />} />
          <Route path="/edit/:id" element={<EditUsers />} />
          <Route path="/view/:id" element={<ViewUsers />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
