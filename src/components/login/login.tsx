import { BrowserRouter} from "react-router-dom"
import * as S from "./loginStyle"

import twitter from "/src/assets/imgs/asideLeft/white/twitter.svg"

export default function Login(){

    return(
        <BrowserRouter>
            <S.SectionLogin>
                <S.LoginDiv>
                    <S.Icon src={twitter} alt="" />
                    <S.Title>Log in to Twitter</S.Title>
                    <S.InputLogin placeholder="Phone number, email address" type="text" />
                    <S.InputLogin placeholder="Password" type="password" />
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
        </BrowserRouter>
    )
}

