import axios from "axios"
import { useEffect, useState } from "react"
import { WeatherData } from "./WeatherData.ts"

/// <reference path="./weatherData.d.ts" />


const KEY = import.meta.env.VITE_APP_API_KEY

export function useFetching(location?:string) {

  const [isFetching, setIsFetching] = useState(false)
  const [data, setData] = useState<WeatherData>()
  
  const locate = location ? location : 'são paulo'
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${locate}&units=metric&lang=pt&cnt=7&appid=${KEY}`

  useEffect(() => {
    setIsFetching(true)
    axios<WeatherData>(URL)
      .then((res) => {
        console.log(res.data)
        setData(res.data)
      })
      .catch((err) => {
        console.error(err)
      })
      .finally(() => {
        setIsFetching(false)
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])

  return {data, isFetching}
}