import { Link } from "react-router-dom"
import * as S from "./erroStyle"

export default function Error() {
  return (
    <S.ErrorDiv>
      <S.Title>Hmmm... this page doesn't exist. Try searching for something else.</S.Title>
      <Link to="/"><S.Btn>Back</S.Btn></Link>
    </S.ErrorDiv>
  )
}
