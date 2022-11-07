import { Helmet } from "react-helmet";
import Left from "../aside-left/left";
import Right from "../aside-right/right";
import Footer from "../footer/footer";
import Main from "../main/main";
import * as S from "./homeStyle"

export default function Home() {
    return(
        <S.Div>
            <Helmet>
                <title>Home / Twitter</title>
            </Helmet>
            <Left/>
            <Main/>
            <Right/>
            <Footer/>
        </S.Div>
    )
}