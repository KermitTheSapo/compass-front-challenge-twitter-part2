import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"
import * as S from "./erroStyle"

export default function Error() {
  return (
    <S.ErrorDiv>
      <Helmet>
        <title>Error 404</title>
      </Helmet>
      <S.Title>Hmmm... this page doesn't exist. Try searching for something else.</S.Title>
      <Link to="/home"><S.Btn>Back</S.Btn></Link>
    </S.ErrorDiv>
  )
}
