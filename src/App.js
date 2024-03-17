import "./App.css";
import Detail from "./page/detailPage";
import Profile from "./page/profile";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    // <div className="App">
      <Routes>
        <Route path="/" element={<Profile />}></Route>
        <Route path="/detail" element={<Detail />}></Route>
      </Routes>
    // </div>
  );
}

export default App;
