import styles from "./HourlyForecast.module.css";
import { useWeather } from "../WeatherContext";

const HourlyForecast = () => {
  const { hourlyData } = useWeather();

  // 시간 계산 및 AM / PM 타입으로 변환
  const formatTime = (item) => {
    const date = new Date(item.dt * 1000);
    const hours = date.getHours();
    const timeNum = hours % 12 === 0 ? 12 : hours % 12;
    const timeFommat = hours >= 12 ? "PM" : "AM";

    return timeNum + timeFommat;
  };

  return (
    <div className={styles.hourly}>
      <p>시간대별 날씨</p>
      <ul className={styles.hourlyList}>
        {hourlyData?.list?.length > 0 &&
          hourlyData.list.slice(0, 8).map((item, index) => (
            <li key={index}>
              <div>
                <p>{formatTime(item)}</p>
                <p>
                  <img
                    src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                    alt="weather icon"
                  />
                </p>
                <p>{item.main.temp.toFixed(1)}°</p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default HourlyForecast;
