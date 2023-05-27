import { useEffect, useState } from "react";
import { CardWrapper, CardsContainer, ContainerCard } from "./forecast.styled";
import { GetDatesArray } from "../../utils/dateGenerate";
import { useFetchForecast } from "../../services/api/useFetchForecast";
import { IconSelect } from "../IconSelect";
import { list } from "./forecastType";
import { CalendarCheck} from "@phosphor-icons/react";

const dates = GetDatesArray()

interface ForecastCardsType {
  text: string
}

export function ForecastCards({ text }: ForecastCardsType) {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [fData, setFData] = useState<list[] | any>() 
  const { data, isFetching } = useFetchForecast(text)

  useEffect(() => {
    if(!isFetching && data) {
      const filteredData = data.list.filter((item) => {
        return dates.some((date) => date.date === item.dt_txt);
      })
      setFData(filteredData)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetching])

  useEffect(() => {
    console.log(fData)
  }, [fData])

  return (
    <>
      <ContainerCard>
        <div className="legend">
          Previsão Semanal 
          <CalendarCheck size={25} />
        </div>
        <CardsContainer>
          {fData ? fData.map((item:list, i:number) => {
            return (
                <CardWrapper>
                  <IconSelect iconName={item.weather[0].icon ? item?.weather[0].icon : '01d'} />
                  <span>{dates[i].day}</span>
                  <h2>{Math.round(item.main.temp)}°</h2>
                </CardWrapper>
            )
          }) : ''}
        </CardsContainer>
      </ContainerCard>
    </>
  )
}