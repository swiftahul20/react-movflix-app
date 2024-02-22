# Movflix App

This simple app can check the latest or upcoming movie or even search your favorite movie.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Folder Structure](#folder-structure)
- [Features](#features)
- [Coding Style](#coding-style)
- [Code Overview](#code-overview)
  - [Fetching Weather Data](fetching-weather-data)
  - [Displaying Weather Data](displaying-weather-data)   
- [Deployment](#deployment)
- [License](#license)

## Getting Started

### Prerequisites
- [React & Vite](https://vitejs.dev/guide/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Material Tailwind](https://www.material-tailwind.com/)
- [Axios](https://axios-http.com/)
- [React Router](https://reactrouter.com/en/main)
- [Netflix Slider](https://codesandbox.io/p/sandbox/netflix-slider-ti9uc)
- [Netflix Modal](https://codepen.io/iPingOi/pen/wvmoVwp)
- [React Slick](https://react-slick.neostack.com/)

### Installation
```bash
# clone the project
https://github.com/swiftahul20/react-movflix-app.git
# move directory
cd movflix-app
# install
npm install
```

### Usage
```bash
# start the development server
# localhost:5173
npm run dev
```


### Folder Structure
```
movflix-app  /
├── public
├── src/
│   ├── assets/
│   │   ├── icons
│   │   └── images
│   ├── components/
│   │   ├── lib
│   │   ├── ModalDetails
│   │   ├── NetflixSlider
│   │   ├── Trending
│   │   ├── Upcoming
│   │   ├── Arrow.jsx
│   │   ├── Button.jsx
│   │   ├── Content.jsx
│   │   ├── Layout.jsx
│   │   ├── Navbar.jsx
│   │   └── Skeleton.jsx
│   ├── pages/
│   │   ├── Error.jsx
│   │   ├── Home.jsx
│   │   ├── Movie.jsx
│   │   ├── MyList.jsx
│   │   └── Search.jsx
│   ├── utils/
│   │   └── context/
│   │       ├── ModalContext.jsx
│   │       └── MovieDetailsContext.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── README.md
├── tailwind.config.js
└── vite.config.js
```

### Features

- Display an upcoming movie in theaters.
- Display an trending movies.
- Search movie by movie name.
- Create a movie list (still on development)
- Login user (still on development)

### Coding Style
ESlint + Prettier

### Code Overview

(still on development)

### Deployment
```bash
# building for deployment
npm run build
```

## License
- API from [The Movie Database](https://developer.themoviedb.org/reference/intro/getting-started)
- Netflix Modal from [PingO](https://codepen.io/iPingOi/pen/wvmoVwp)
- Netflix Slider from [Serhazor](https://github.com/Serhazor/netflix-slider/tree/master)
