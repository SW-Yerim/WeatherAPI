const API_KEY = "9b9c73cefc65630d613993d386828f99";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

// 현재 날씨 가져오는 api
export const currentWeather = async (lat, lon) => {
  try {
    let response = await fetch(
      `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`
    );
    return await response.json();
  } catch (error) {
    console.error("현재 날씨 정보를 가져오는데 실패했습니다. : ", error);
  }
};

// 현재 대기질 정보 가져오는 api
export const currentAirPollution = async (lat, lon) => {
  try {
    let response = await fetch(
      `${BASE_URL}/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`
    );
    return await response.json();
  } catch (error) {
    console.error("현재 대기질 정보를 가져오는데 실패했습니다. : ", error);
  }
};

// 5일치 날씨 가져오는 api
export const weekWeather = async (lat, lon) => {
  try {
    let response = await fetch(
      `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`
    );
    return await response.json();
  } catch (error) {
    console.error("5일치 날씨 정보를 가져오는데 실패했습니다. : ", error);
  }
};
