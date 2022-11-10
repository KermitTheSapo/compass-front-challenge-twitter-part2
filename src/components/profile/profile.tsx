import * as S from "./profileStyle"
import Arrow from "../../assets/imgs/profileComponent/arrow.svg"
import Background from "../../assets/imgs/profileComponent/backgroundImg.png"
import Localization from "../../assets/imgs/profileComponent/localization.svg"
import calendar from "../../assets/imgs/profileComponent/calendar.svg"
import profile from "../../assets/imgs/profileComponent/ProfilePicture.png"
import Post from "../post/post"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
export default function Profile() {
    let postData = localStorage.getItem("post") as string
    var postObj = JSON.parse(postData)
    let loginData = localStorage.getItem("name") as string
    let passwordData = localStorage.getItem("password") as string
    var loginObj = JSON.parse(loginData)
    var passwordObj = JSON.parse(passwordData)
    const navigate = useNavigate()
    useEffect(() => {
        if (loginObj === "admin" && passwordObj === "admin") {
        } else {
            let userAnswer = confirm("The user is not connected to an account, please go back to the login page to login or enjoy the guest version")
            if (userAnswer === true) {
                navigate("/")
            }
        }
    }, [navigate])
    return (
        <S.Profile>
            <S.Header>
                <S.Header__figure onClick={() => navigate("/home")}>
                    <S.Figure__img src={Arrow} alt="a blue arrow pointing to the left" />
                </S.Header__figure>
                <S.Header__content>
                    <S.Content__name>Name</S.Content__name>
                    <S.Content__tweet>9 tweets</S.Content__tweet>
                </S.Header__content>
            </S.Header>
            <S.MainProfile>
                <S.MainProfile__background>
                    <S.BackgroundImg src={Background} alt="a mountain with purple colors in the environment" />
                </S.MainProfile__background>
                <S.MainProfile__content>
                    <S.DivBtn>
                        <S.Btn onClick={() => {
                            if (loginObj === "admin" && passwordObj === "admin") {
                                navigate("/error")
                            } else {
                                alert("You are in guest mode, you can't post")
                            }
                        }}>Edit profile</S.Btn>
                    </S.DivBtn>
                    <S.DivContent>
                        <S.ProfileImg src={profile} alt="a person with a black shirt and a cookie head" />
                        <S.ContentName>Jerome Bell</S.ContentName>
                        <S.ContentNick>@afonsoinocente</S.ContentNick>
                        <S.ContentParagraph>Product Design</S.ContentParagraph>
                        <S.Information>
                            <S.Icon src={Localization} alt="a dot icon relative to location" />
                            <S.ContentText>London</S.ContentText>
                            <S.Icon src={calendar} alt="a calendar icon" />
                            <S.ContentText>Joined September 2011</S.ContentText>
                        </S.Information>
                        <S.Follow>
                            <S.Number>569</S.Number>
                            <S.ContentText>Following</S.ContentText>
                            <S.Number>569</S.Number>
                            <S.ContentText>Followers</S.ContentText>
                        </S.Follow>
                        <S.Tabbar>
                            <S.TabbarDiv>
                                <S.TabbarName>Tweets</S.TabbarName>
                            </S.TabbarDiv>
                            <S.TabbarDiv>
                                <S.TabbarName>Tweets & replies</S.TabbarName>
                            </S.TabbarDiv>
                            <S.TabbarDiv>
                                <S.TabbarName>Media</S.TabbarName>
                            </S.TabbarDiv>
                            <S.TabbarDiv>
                                <S.TabbarName>Likes</S.TabbarName>
                            </S.TabbarDiv>
                        </S.Tabbar>
                    </S.DivContent>
                </S.MainProfile__content>
            </S.MainProfile>
            <S.DivPost>
                {postObj && postObj.map((data) => <Post data={data} />)}
            </S.DivPost>
        </S.Profile>
    )
}