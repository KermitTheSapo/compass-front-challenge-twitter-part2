import { Helmet } from "react-helmet";
import Left from "../aside-left/left";
import Right from "../aside-right/right";
import Footer from "../footer/footer";
import Profile from "../profile/profile";
import * as S from "./profileDivStyle"

let loginData = localStorage.getItem("name")
let passwordData = localStorage.getItem("password")
var loginObj = JSON.parse(loginData)
var passwordObj = JSON.parse(passwordData)  
console.log(loginObj)
console.log(passwordObj)

let footerTrue = true

if (loginObj === "admin" && passwordObj === "senha"){
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