import { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import {useNavigate } from "react-router-dom"
import * as S from "./erroStyle"

export default function Error() {
  let loginData = localStorage.getItem("name") as string
  let passwordData = localStorage.getItem("password") as string
  var loginObj = JSON.parse(loginData)
  var passwordObj = JSON.parse(passwordData)  
  const navigate = useNavigate()
  const [login, setLogin] = useState(true)
  useEffect(() => {
    if(loginObj === "admin" && passwordObj === "admin") {
    } else{
      setLogin(false)
    }
  }, [navigate])
  return (
    <S.ErrorDiv>
      <Helmet>
        <title>Error 404</title>
      </Helmet>
      <S.Title>Hmmm... this page doesn't exist. Try searching for something else.</S.Title>
      <S.Btn onClick={() => {login ? navigate("/home") : navigate("/")}}>Back</S.Btn>
    </S.ErrorDiv>
  )
}
