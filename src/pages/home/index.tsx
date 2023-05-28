import { useState } from "react";
import { CurrentCard } from "../../components/CurrentCard";
import { Search } from "../../components/Search";
import { useFetchCurrent } from "../../services/api/useFetchCurrent";
import { ForecastCards } from "../../components/ForecastCards";
import { Loading } from "../../components/Loading";
import { HomeContainer } from "./home.styled";

export function Home() {

  const [text, setText] = useState('')
  const { data, isFetching } = useFetchCurrent(text)

  return (
    <HomeContainer>
      <Search setValue={setText} />
      {isFetching ? <Loading /> :
        <CurrentCard
          city={`${data?.name} (${data?.sys.country})`}
          desc={data?.weather[0].description}
          temp={data?.main.temp}
          umd={data?.main.humidity}
          wind={data?.wind.speed}
          icon={data ? data?.weather[0].icon : '01d'}
        />
      }
      <ForecastCards text={text} />
    </HomeContainer>
  )
}