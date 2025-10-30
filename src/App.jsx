import { Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/auth" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default App;
