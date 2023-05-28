import { CircleNotch } from "@phosphor-icons/react"
import { LoadingWrapper } from "./loading.styled"
import { ThemeDefault } from "../../styles/themes/default"

export function Loading() {
  return (
    <LoadingWrapper>
      <CircleNotch
        size={35}
        weight="regular"
        color={ThemeDefault.colors.white}
      />
    </LoadingWrapper>
  )
}