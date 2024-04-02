import "./App.css";
import Detail from "./page/detailPage";
import HomeMain from "./page/homeMain";
import LandingPage from "./page/landingPage";
import Profile from "./page/profile";
import { Routes, Route } from "react-router-dom";
import ProfileTwo from "./page/profileTwo";
import AssetsScreen from "./page/assetsScreen";
import CreateItems from "./page/createItems";
import StatScreen from "./page/statScreen";
import AnimatedCursor from "react-animated-cursor"

function App() {
  return (
    <div>
    <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color='32, 233, 255'
      outerAlpha={.8}
      innerScale={.8}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
        {
          target: '.custom',
          options: {
            innerSize: 12,
            outerSize: 12,
            color: '255, 255, 255',
            outerAlpha: 0.3,
            innerScale: 0.7,
            outerScale: 5
          }
        }
      ]}
    />
     <Routes>
      <Route path="/" element={<HomeMain />}></Route>
      <Route path="/explore" element={<LandingPage />}></Route>
      <Route path="/detail" element={<Detail />}></Route>
      <Route path="/profileTwo" element={<Profile />}></Route>
      <Route path="/profile" element={<ProfileTwo />}></Route>
      <Route path="/assetsScreen" element={<AssetsScreen />}></Route>
      <Route path="/createItems" element={<CreateItems />}></Route>
      <Route path="/statScreen" element={<StatScreen />}></Route>
    </Routes>
    </div>
   );
}

export default App;
