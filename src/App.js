import "./App.css";
import Detail from "./page/detailPage";
import HomeMain from "./page/homeMain";
import LandingPage from "./page/landingPage";
import Profile from "./page/profile";
import { Routes, Route } from "react-router-dom";
import ProfileTwo from "./page/profileTwo";
import AssetsScreen from "./page/assetsScreen";
import CreateItems from "./page/createItems";

function App() {
  return (
    // <div className="App">
    <Routes>
      <Route path="/" element={<HomeMain />}></Route>
      <Route path="/explore" element={<LandingPage />}></Route>
      <Route path="/detail" element={<Detail />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/profileTwo" element={<ProfileTwo />}></Route>
      <Route path="/assetsScreen" element={<AssetsScreen />}></Route>
      <Route path="/createItems" element={<CreateItems />}></Route>
    </Routes>
    // </div>
  );
}

export default App;
