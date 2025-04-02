import Button from "../common/Button/Button";
import styles from "./Header.module.css";
import { useWeather } from "../WeatherContext";

const Header = () => {
  const { getCurrentLocation } = useWeather();

  const handleLocationFind = (lat, lon) => {
    getCurrentLocation(lat, lon);
  };

  const countryList = [
    { country: "미국", city: "Washington D.C.", lat: 38.9041, lon: -77.0171 },
    { country: "영국", city: "London", lat: 51.5072, lon: -0.1275 },
    { country: "한국", city: "Seoul", lat: 37.574187, lon: 126.976882 },
    { country: "호주", city: "Canberra", lat: -35.2819, lon: 149.1286 },
  ];

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>🌤 WEATHER</h1>
      <ul className={styles.countryWrap}>
        {countryList?.length > 0 &&
          countryList.map((item, index) => (
            <li key={index}>
              <Button onClick={() => handleLocationFind(item.lat, item.lon)}>
                {item.country}
              </Button>
            </li>
          ))}
        <li>
          <Button onClick={() => handleLocationFind()}>내 위치</Button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
