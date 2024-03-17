import "./App.css";
 import Detail from "./page/detailPage";
import LandingPage from "./page/landingPage";
import Profile from "./page/profile";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    // <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/detail" element={<Detail />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    // </div>
  );
}

export default App;
