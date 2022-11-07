import { Helmet } from "react-helmet";
import Left from "../aside-left/left";
import Right from "../aside-right/right";
import Footer from "../footer/footer";
import Main from "../main/main";
import * as S from "./homeStyle"

// let loginData = localStorage.getItem("name")
// let passwordData = localStorage.getItem("password")
// var loginObj = JSON.parse(loginData)
// var passwordObj = JSON.parse(passwordData)    

// if(loginObj === "admin" && passwordObj === "senha") {
// } else{
//     // console.log("asd")
//     document.location.pathname = "/profile"
// }

// setTimeout(() => {
// }, 500)



// if (!(loginObj === "admin") && !(passwordObj === "senha")){
//     let userAnswer = confirm("The user is not connected to an account, please go back to the login page to login or enjoy the guest version")
//     if (userAnswer === true){
//         document.location.pathname = "/"
//         userAnswer = false
//         loginObj = "admin"
//         passwordObj = "password"
//     }
// } else if(!(loginObj === "admin") && !(passwordObj === "senha")){
//     console.log("senha errada")
//     // document.location.pathname = "/login"
// } else{
//     console.log(passwordObj)
//     console.log("deu bom")
// }
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