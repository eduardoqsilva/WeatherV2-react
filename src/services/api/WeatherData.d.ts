// Arquivo: weatherData.d.ts

export interface WeatherDataForecast {
  cod: string;
  message: number;
  cnt: number;
  list: {
    dt: number;
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      sea_level: number;
      grnd_level: number;
      humidity: number;
      temp_kf: number;
    };
    weather: {
      id: number;
      main: string;
      description: string;
      icon: string;
    }[];
    clouds: {
      all: number;
    };
    wind: {
      speed: number;
      deg: number;
      gust?: number;
    };
    visibility?: number;
    pop?: number;
    sys?: {
      pod?: string;
    };
    dt_txt?: string;
  }[];
}


export interface WeatherDataCurrent {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: '01d' | '02d' | '03d' | '04d' | '09d' | '10d' | '11d' | '13d' | '50d' | 
    '01n' | '02n' | '03n' | '04n' | '09n' | '10n' | '11n' | '13n' | '50n';
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust?: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type?: number;
    id?: number;
    country?: string;
    sunrise?: number;
    sunset?: number;
  };
  timezone?: number;
  id?: number;
  name?: string;
  cod?: number;
}
