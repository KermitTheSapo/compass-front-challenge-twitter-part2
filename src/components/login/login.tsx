import { useState } from "react"
import * as S from "./loginStyle"
import { Helmet } from "react-helmet";
import twitter from "/src/assets/imgs/asideLeft/white/twitter.svg"

export default function Login() {
    const registeredLogin = {
        name: "admin",
        password: "admin"
    }
    const loginInput = document.querySelector("#login")
    const passwordInput = document.querySelector("#password")

    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [errorLogin, setErrorLogin] = useState(false)
    const keepCredentials = () => {
        if (login.length > 0 && password.length > 0) {
            if (login === registeredLogin.name && password === registeredLogin.password) {
                localStorage.setItem("name", JSON.stringify(login))
                localStorage.setItem("password", JSON.stringify(password))
                console.log(localStorage.getItem("name"))
                alert("Successfully logged in!")
                setLogin("")
                setPassword("")
                setErrorLogin(false)
                loginInput?.setAttribute("style", "border: 1px solid #00000033;")
                passwordInput?.setAttribute("style", "border: 1px solid #00000033;")
                document.location.pathname = "/home"
            } else {
                alert("Incorrect login or password!")
                setErrorLogin(true)
                loginInput?.setAttribute("style", "border: 1px solid red")
                passwordInput?.setAttribute("style", "border: 1px solid red")
            }
        } else {
            alert("Fill in all fields!")
        }
    }
    return (
        <S.SectionLogin>
            <Helmet>
                <title>Login / Twitter</title>
            </Helmet>
            <S.LoginDiv autoComplete="off" onSubmit={(e) => {
                e.preventDefault()
                keepCredentials()
            }}>
                <S.Icon src={twitter} alt="" />
                <S.Title>Log in to Twitter</S.Title>
                <S.InputLogin id="login" value={login} onChange={(e) => { setLogin(e.target.value) }} placeholder="Phone number, email address" type="text" />
                <S.InputLogin id="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" type="password" />
                {errorLogin && <S.ParagraphError>Incorrect login or password!</S.ParagraphError>}
                <S.BtnLogin>Log In</S.BtnLogin>
                <S.Actions>
                    <S.LinkActions to="/error">
                        <S.Paragraph>Forgot password?</S.Paragraph>
                    </S.LinkActions>
                    <S.LinkActions to="/error">
                        <S.Paragraph>Sign up to Twitter</S.Paragraph>
                    </S.LinkActions>
                </S.Actions>
            </S.LoginDiv>
        </S.SectionLogin>
    )
}

