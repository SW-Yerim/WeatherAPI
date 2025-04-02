import styles from "./WeeklyForecast.module.css";
import { useWeather } from "../WeatherContext";
import { useMemo } from "react";

const WeeklyForecast = () => {
  const { hourlyData } = useWeather();

  const weeklyWeather = useMemo(() => {
    if (!hourlyData?.list || hourlyData.list.length === 0) return;

    const dailyData = {};

    // 리스트에서 날짜를 기준으로 그룹핑해서 최고/최저온도 구하기기
    hourlyData.list.forEach((item) => {
      const date = new Date(item.dt * 1000);
      const formatDate = `${date.getMonth() + 1}월 ${date.getDate()}일`;

      if (!dailyData[formatDate]) {
        dailyData[formatDate] = {
          minTemp: Infinity,
          maxTemp: -Infinity,
          icon: item.weather[0].icon, // 날씨 아이콘 저장
          dt: item.dt, // 날짜 저장
        };
      }

      dailyData[formatDate].minTemp = Math.min(
        dailyData[formatDate].minTemp,
        item.main.temp_min
      );
      dailyData[formatDate].maxTemp = Math.max(
        dailyData[formatDate].maxTemp,
        item.main.temp_max
      );
    });

    // 그룹핑된 데이터 포맷 변경
    // 기존 : [ { date, {minTemp, maxTemp, icon} } ]
    // 변경 : [ { date, minTemp, maxTemp, icon } ]
    return Object.entries(dailyData).map(([date, values]) => ({
      date,
      maxTemp: Math.round(values.maxTemp),
      minTemp: Math.round(values.minTemp),
      icon: values.icon,
    }));
  }, [hourlyData]);

  return (
    <div className={styles.week}>
      <p>주간 예보</p>
      <ul className={styles.weekList}>
        {weeklyWeather?.length > 0 &&
          weeklyWeather.map((item, index) => (
            <li key={index}>
              <p>{item.date}</p>
              <p>
                <img
                  src={`https://openweathermap.org/img/wn/${item.icon}.png`}
                  alt="weather icon"
                />
              </p>
              <p>
                <span className="blue">{item.minTemp}°</span>
                <span> / </span>
                <span className="red">{item.maxTemp}°</span>
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default WeeklyForecast;
