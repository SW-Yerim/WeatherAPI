import styles from "./WeatherDetails.module.css";
import { useWeather } from "../WeatherContext";
import { useMemo } from "react";
import WeatherToday from "../WeatherToday/WeatherToday";
import icons from "../../assets/icons";

const WeatherDetails = () => {
  const { weather, airPollution } = useWeather();

  // 일출 / 일몰 시간 계산
  const formatTime = (item) => {
    const date = new Date(item * 1000);
    const hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const result = hours + ":" + minutes;
    return result;
  };

  // 미세먼지
  const dustPm10 = useMemo(() => {
    if (!airPollution?.list?.length) return;

    const pm10 = airPollution.list[0].components.pm10;
    if (pm10 <= 30) return "좋음";
    if (pm10 <= 80) return "보통";
    if (pm10 <= 150) return "나쁨";
    return "매우 나쁨";
  }, [airPollution]);

  // 초미세먼지
  const dustPm2 = useMemo(() => {
    if (!airPollution?.list?.length) return;

    const pm2 = airPollution.list[0].components.pm2_5;
    if (pm2 <= 15) return "좋음";
    if (pm2 <= 35) return "보통";
    if (pm2 <= 75) return "나쁨";
    return "매우 나쁨";
  }, [airPollution]);

  // 일산화탄소
  const dustCo = useMemo(() => {
    if (!airPollution?.list?.length) return;

    const co = airPollution.list[0].components.co / 28.01;
    if (co <= 2) return "좋음";
    if (co <= 9) return "보통";
    if (co <= 15) return "나쁨";
    return "매우 나쁨";
  }, [airPollution]);

  const weatherDetails = [
    { label: "최저", value: `${weather?.main?.temp_min.toFixed(1)}°`, icon: icons.icon01 },
    { label: "최고", value: `${weather?.main?.temp_max.toFixed(1)}°`, icon: icons.icon02 },
    { label: "체감", value: `${weather?.main?.feels_like}°`, icon: icons.icon03 },
    { label: "습도", value: `${weather?.main?.humidity}%`, icon: icons.icon04 },
    { label: "일출", value: `${formatTime(weather?.sys?.sunrise)}`, icon: icons.icon05 },
    { label: "일몰", value: `${formatTime(weather?.sys?.sunset)}`, icon: icons.icon06 },
    { label: "미세먼지", value: `${dustPm10}`, icon: icons.icon07 },
    { label: "초미세먼지", value: `${dustPm2}`, icon: icons.icon08 },
    { label: "일산화탄소", value: `${dustCo}`, icon: icons.icon09 },
  ];

  return (
    <div className={styles.contentWrap}>
      <div className={styles.content}>
        <WeatherToday></WeatherToday>
        <ul className={styles.weatherList}>
          {weatherDetails?.length > 0 &&
            weatherDetails.map((item, index) => (
              <li key={index}>
                <p>{item.label}</p>
                <div>
                  <span>
                    <img src={item.icon} alt="weather icon" />
                  </span>
                  <span>{item.value}</span>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default WeatherDetails;
