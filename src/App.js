import "./assets/styles/reset.css";
import "./assets/styles/global.css";
import "./App.css";
import Home from "./pages/home";
import WeatherProvider from "./components/WeatherProvider";

function App() {
  return (
    <WeatherProvider>
      <div className="appContainer">
        <Home />
      </div>
    </WeatherProvider>
  );
}

export default App;
