import { MagnifyingGlass } from "@phosphor-icons/react";
import { InputWrapper } from "./search.styled";


interface SearchType {
  setValue: (value: string) => void
}

export function Search({ setValue }: SearchType) {

  return (
    <InputWrapper>
      <input type="text" 
        onKeyDown={(e) => {
          if(e.key === 'Enter') {
            setValue(e.currentTarget.value)
            e.currentTarget.value = ''
          }
        }}
      />
      <MagnifyingGlass size={28} />
    </InputWrapper>
  )
}