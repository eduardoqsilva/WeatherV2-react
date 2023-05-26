import { useEffect, useState } from "react";
import { ContainerCard } from "./forecast.styled";
import { GetDatesArray } from "../../utils/dateGenerate";
import { useFetchForecast } from "../../services/api/useFetchForecast";

const dates = GetDatesArray()

interface ForecastCardsType {
  text: string
}

export function ForecastCards({ text }: ForecastCardsType) {

  const [fData, setFData] = useState<object[]>() 
  const { data, isFetching } = useFetchForecast()

  useEffect(() => {
    if(!isFetching && data) {
      const filteredData = data.list.filter((item) => {
        return dates.some((date) => date.date === item.dt_txt);
      })
      setFData(filteredData)
    }
  }, [isFetching])

  useEffect(() => {
    console.log(fData)
  }, [fData])

  return (
    <ContainerCard>
      <h2>hello</h2>
    </ContainerCard>
  )
}