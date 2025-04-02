
📝 프로젝트 개요
--- 

📌 프로젝트 이름: 🌤 Weather App

<br />

📌 프로젝트 선정 이유:

    1. 기본적인 react 프로젝트 설계 익히기
      → 사용하는 언어마다 기본 폴더구조 차이가 조금씩 있는데
        react에서는 폴더 구조를 어떤식으로 설정하는지 학습하기 위해
         
    2. react 에서 데이터 상태값 관리하는 방법 익히기
      → useEffect, useState, useContents, useMemo 등
        react 에서 데이터 관리하는 방법에 대해 학습하기 위해
    
    3. open API 연동하는 방법 익히기
      → api 연동 후 데이터 상태 관리법을 학습하기 위해
    
    4. 간단한 페이지에서 css 적용하는 법 익히기
      → react는 html과 달리 className 이라는 태그로 클래스를 제어하고
        공통 js 로 사용자 태그를 설정해서 css 적용도 해보고
        컴포넌트 별 module.css 를 따로 만들어서 각 페이지별 css 를 적용 해보기 위해


<br />

📌 프로젝트 주요 기능


1. 현재 기온, 날씨 상태, 습도, 풍속, 대기질 정보 제공

2. 사용자의 현재 위치를 기반으로 날씨 정보 제공

3. 특정 도시를 선택하여 날씨 확인 가능

4. 5일간의 시간별 날씨 예보 확인

5. 모바일 반응형 레이아웃 지원



<br />

🛠 사용 기술
---

🎨 Frontend

React (컴포넌트 기반 UI)

CSS Modules (컴포넌트 단위 스타일링)

React Hooks (useState, useEffect, useContext 활용)

<br />

🌍 API & 데이터 처리

OpenWeather API (날씨 데이터 및 대기질 정보)

Geolocation API (사용자의 현재 위치 가져오기)


<br />


폴더 구조
---
weather-app/

│── src/ 

│   ├── api/

│   │   ├── weatherApi.js            # OpenWeather API 호출 함수

│   ├── components/

│   │   ├── common

│   │   │   ├── Button.js            # 사용자 지정 태그

│   │   ├── Header

│   │   │   ├── Header.js            # 컴포넌트 js 파일

│   │   │   ├── Header.module.css    # 컴포넌트 css 파일

│   │   ├── WeatherDetails

│   │   │   ├── WeatherDetails.js

│   │   │   ├── WeatherDetails.module.css

│   │   ├── WeatherToday

│   │   │   ├── WeatherToday.js

│   │   │   ├── WeatherToday.module.css

│   │   ├── HourlyForecast

│   │   │   ├── HourlyForecast.js

│   │   │   ├── HourlyForecast.module.css

│   │   ├── WeatherForecast

│   │   │   ├── WeatherForecast.js

│   │   │   ├── WeatherForecast.module.css

│   ├── pages/

│   │   ├── Home.jsx                 # 메인 페이지

│   ├── assets/

│   │   ├── fonts/                   # 폰트 저장 폴더

│   │   ├── icons/                   # 날씨 아이콘 저장 폴더

│   │   ├── styles/                  # 스타일 저장 폴더

│   ├── App.css

│   ├── App.js

│   ├── index.js

<br />


주요 컴포넌트 설명
---

🔹 WeatherProvider.js

Context API를 활용하여 날씨 데이터를 전역 상태로 관리

API 호출 및 데이터를 상태값으로 저장

로딩 상태를 관리


🔹 Header.js

프로젝트의 로고 및 네비게이션 메뉴

모바일에서는 햄버거 메뉴 형태로 변환


🔹 WeatherToday.js

현재 날씨를 보여주는 컴포넌트

기온, 날씨 상태, 습도, 풍속 등의 정보를 표시


🔹 HourlyForecast.js

3시간 간격의 날씨 예보를 리스트로 출력


🔹 WeatherForecast.js

5일간의 날씨 예보를 날짜별 카드 형태로 출력


