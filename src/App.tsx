import { Route, Routes } from "react-router-dom";
import HomePage from "./Dashboard/Homepage";
import LoginForm from "./Dashboard/LoginForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginForm />} />
    </Routes>
  );
}

export default App;
