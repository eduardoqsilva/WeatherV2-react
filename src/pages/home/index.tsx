import { useState } from "react";
import { CurrentCard } from "../../components/CurrentCard";
import { Search } from "../../components/Search";
import { useFetchCurrent } from "../../services/api/useFetchCurrent";
import { ForecastCards } from "../../components/ForecastCards";

export function Home() {

  const [text, setText] = useState('')
  const { data, isFetching } = useFetchCurrent(text)

  return (
    <>
      <Search setValue={setText} />
      {isFetching ? '' :
        <CurrentCard
          city={`${data?.name} (${data?.sys.country})`}
          desc={data?.weather[0].description}
          temp={data?.main.temp}
          umd={data?.main.humidity}
          wind={data?.wind.speed}
          icon={data ?  data?.weather[0].icon : '01d'}
        />
      }
      <ForecastCards text={text}/>
    </>
  )
}