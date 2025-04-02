
📝 프로젝트 개요
--- 

프로젝트 선정 이유
React 로 만드는 첫번째 프로젝트는 

OpenWeather API 등을 활용하여 실시간 날씨 정보를 가져오는 프로젝트로

해당 프로젝트를 기획한 이유는 크게 아래와 같다.

    → 1. 기본적인 react 프로젝트 설계 익히기
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

🛠 사용 기술
---
react

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

