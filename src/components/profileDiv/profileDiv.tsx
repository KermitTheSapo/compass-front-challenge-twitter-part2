import { Helmet } from "react-helmet";
import Left from "../aside-left/left";
import Right from "../aside-right/right";
import Footer from "../footer/footer";
import Profile from "../profile/profile";
import * as S from "./profileDivStyle"

let loginData = localStorage.getItem("name") as string
let passwordData = localStorage.getItem("password") as string
var loginObj = JSON.parse(loginData)
var passwordObj = JSON.parse(passwordData)  
let footerTrue = true
if (loginObj === "admin" && passwordObj === "admin"){
    footerTrue = false
}
export default function ProfileDiv(){
    return(
        <S.Div>
            <Helmet>
                <title>Profile / Twitter</title>
            </Helmet>
            <Left/>
            <Profile/>
            <Right/>
            {!footerTrue ? null : <Footer/> }
        </S.Div>
    )
}