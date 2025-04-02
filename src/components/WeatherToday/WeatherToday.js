import styled from "./WeatherToday.module.css";
import { useWeather } from "../WeatherContext";

const WeatherToday = () => {
  const { location, weather } = useWeather();

  const today = new Date().toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });

  return (
    <div className={styled.today}>
      <div className={styled.todayContent}>
        <p>현재</p>
        <p>
          <span>
            <img
              src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}.png`}
              alt="weather icon"
            />
          </span>{" "}
          <span>{weather?.main.temp.toFixed(1)}°</span>
        </p>
        <p>{weather?.weather[0].description}</p>
      </div>
      <div className={styled.todayBottom}>
        <p>{today}</p>
        <p>
          {location?.country} / {location?.city}
        </p>
      </div>
    </div>
  );
};

export default WeatherToday;
