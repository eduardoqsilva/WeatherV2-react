import { Drop, Sun, Wind } from "@phosphor-icons/react";
import { IconSelect } from "../IconSelect";
import { ContainerCurrentCard, InfoWrapper } from "./currentCard.styled";
import { ThemeDefault } from "../../styles/themes/default";

const colors = ThemeDefault.colors

interface CurrentType {
  city: string | undefined
  temp: number | undefined
  desc: string | undefined
  wind: number | undefined
  umd: number | undefined
  icon: '01d' | '02d' | '03d' | '04d' | '09d' | '10d' | '11d' | '13d' | '50d' |
  '01n' | '02n' | '03n' | '04n' | '09n' | '10n' | '11n' | '13n' | '50n'
}

export function CurrentCard({ city, temp, desc, umd, wind, icon }: CurrentType) {

  function Time() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return hours + ':' + minutes;
  }

  return (
    <ContainerCurrentCard>
      <h3>{city}</h3>
      <IconSelect iconName={icon} />
      <div className="temp">
        <h1>{temp ? Math.round(temp) : ''}<sup>°</sup></h1>
        <span>{desc}</span>
      </div>
      <InfoWrapper>
        <div className="info">
          <Wind size={25} color={colors.white} />
          <span>{wind ? Math.round(wind) : ''}km</span>
        </div>
        <div className="info">
          <Drop size={25} color={colors.white} />
          <span>{umd}%</span>
        </div>
        <div className="info">
          <Sun size={25} color={colors.white} />
          <span>{Time()}</span>
        </div>
      </InfoWrapper>
    </ContainerCurrentCard>
  )
}