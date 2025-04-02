import { useWeather } from "../components/WeatherContext";
import Header from "../components/Header/Header";
import HourlyForecast from "../components/HourlyForecast/HourlyForecast";
import WeatherDetails from "../components/WeatherDetails/WeatherDetails";
import WeeklyForecast from "../components/WeeklyForecast/WeeklyForecast";

export default function Home() {
  const { loading } = useWeather();

  return (
    <div className="appContents">
      {loading ? (
        <div className="loading">
          <p>⏳</p>
          <p>
            날씨 정보를
            <br />
            불러오는 중 ...
          </p>
        </div>
      ) : (
        <>
          <Header></Header>
          <WeatherDetails></WeatherDetails>
          <HourlyForecast></HourlyForecast>
          <WeeklyForecast></WeeklyForecast>
        </>
      )}
    </div>
  );
}
