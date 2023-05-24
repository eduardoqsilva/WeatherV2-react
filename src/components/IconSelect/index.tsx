import { iconsPath as icons } from '../../utils/iconsPath'
import { IconWrapper } from './iconSelect.styled'

interface IconSelectType {
  iconName?: '01d' | '02d' | '03d' | '04d' | '09d' | '10d' | '11d' | '13d' | '50d' | 
  '01n' | '02n' | '03n' | '04n' | '09n' | '10n' | '11n' | '13n' | '50n'
}

export function IconSelect({ iconName }: IconSelectType) {

  const icon = () => {
    if (iconName) {
      return icons[iconName]
    }
  }

  return (
    <IconWrapper>
      <img src={icon()} alt="" />
    </IconWrapper>
  )
}