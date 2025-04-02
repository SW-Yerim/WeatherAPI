import { useEffect, useState } from "react";
import WeatherContext from "./WeatherContext";
import {
  currentWeather,
  currentAirPollution,
  weekWeather,
} from "../api/WeatherApi";

const WeatherProvider = ({ children }) => {
  // Loading 데이터
  const [loading, setLoading] = useState(true);

  // 지역, 날씨 변수
  const [location, setLocation] = useState({
    country: "US",
    city: "Washington D.C.",
    lat: 38.9041,
    lon: -77.0171,
  });
  const [weather, setWeather] = useState(null);
  const [airPollution, setAirPollution] = useState(null);
  const [hourlyData, setHourlyData] = useState([]);

  // 도시 위치 가져오기
  const getCurrentLocation = (lat, lon) => {
    if (lat && lon) {
      // 버튼으로 도시 위치 가져오기
      const newLocation = { lat, lon };
      setLocation((prev) => ({
        ...prev,
        lat: newLocation.lat,
        lon: newLocation.lon,
      }));
    } else {
      // 내 위치 가져오기
      navigator.geolocation.getCurrentPosition((position) => {
        const newLocation = {
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        };
        setLocation((prev) => ({
          ...prev,
          lat: newLocation.lat,
          lon: newLocation.lon,
        }));
      });
    }
  };

  // 날씨 정보 데이터 가져오기
  const getWeatherData = async (lat, lon) => {
    setLoading(true);
    try {
      const [weatherData, airPollutionData, hourlyDataList] = await Promise.all(
        [
          currentWeather(lat, lon),
          currentAirPollution(lat, lon),
          weekWeather(lat, lon),
        ]
      );

      // 현재 날씨 정보 가져오기
      setWeather(weatherData);
      // 현재 대기질 정보 가져오기
      setAirPollution(airPollutionData);
      // 5일치 날씨 정보 가져오기
      setHourlyData(hourlyDataList);

      // 위치 정보 저장
      setLocation((prev) => ({
        ...prev,
        city: weatherData.name,
        country: weatherData.sys.country,
      }));
    } catch (error) {
      console.error("현재 날씨 정보를 가져오는데 실패했습니다. : ", error);
    } finally {
      setLoading(false);
    }
  };

  // 위치가 변경될 때마다 날씨 정보를 가져옴
  useEffect(() => {
    if (location.lat && location.lon) {
      getWeatherData(location.lat, location.lon);
    }
  }, [location.lat, location.lon]);

  return (
    <WeatherContext.Provider
      value={{
        loading,
        location,
        weather,
        airPollution,
        hourlyData,
        getCurrentLocation,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
