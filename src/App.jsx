import "./App.css";
import SonwFlakeAnimation from "./components/SnowflakeAnimation";
import MeteorAnimation from "./components/meteorAnimation";
function App() {
  return (
    <>
      <SonwFlakeAnimation count={100} />
      <MeteorAnimation />
    </>
  );
}

export default App;
