import { Helmet } from "react-helmet";
import Left from "../aside-left/left";
import Right from "../aside-right/right";
import Footer from "../footer/footer";
import Main from "../main/main";
import * as S from "./homeStyle"

let loginData = localStorage.getItem("name") as string
let passwordData = localStorage.getItem("password") as string
var loginObj = JSON.parse(loginData) 
var passwordObj = JSON.parse(passwordData)
let footerTrue = true
if (loginObj === "admin" && passwordObj === "admin"){
    footerTrue = false
}

interface Props {
    toggleTheme(): void;
}
export default function Home({ toggleTheme }: Props) {    
    return(
        <S.Div>
            <Helmet>
                <title>Home / Twitter</title>
            </Helmet>
            <Left/>
            <Main toggleTheme={toggleTheme} />
            <Right/>
            {!footerTrue ? null : <Footer/> }
            {/* <Footer/> */}
        </S.Div>
    ) 
}