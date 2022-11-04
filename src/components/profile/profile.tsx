import * as S from "./profileStyle"

import Arrow from "../../assets/imgs/profileComponent/arrow.svg"
import Background from "../../assets/imgs/profileComponent/backgroundImg.png"
import Localization from "../../assets/imgs/profileComponent/localization.svg"
import calendar from "../../assets/imgs/profileComponent/calendar.svg"
import profile from "../../assets/imgs/profileComponent/ProfilePicture.png"
import comment from "../../assets/imgs/main/comment.svg"
import retweet from "../../assets/imgs/main/retweet.svg"
import likeDisabled from "../../assets/imgs/main/like-disabled.svg"
import share from "../../assets/imgs/main/share.svg"
import { useState } from "react"
export default function Profile(){

    const [tweet, setTweet] = useState([{
        time: "aaaaaaa",
        content: "aaaaaaaaaaa"
    },{
        time: "aaaaaaa",
        content: "aaaaaaaaaaa"
    }])

    return(
        <S.Profile>
            <S.Header>
                <S.Header__figure>
                    <S.Figure__img src={Arrow} alt="" />
                </S.Header__figure>
                <S.Header__content>
                    <S.Content__name>Name</S.Content__name>
                    <S.Content__tweet>9 tweets</S.Content__tweet>
                </S.Header__content>
            </S.Header>
            <S.MainProfile>
                <S.MainProfile__background>
                    <S.BackgroundImg src={Background} alt="" />
                </S.MainProfile__background>
                <S.MainProfile__content>
                    <S.DivBtn>
                        <S.Btn>Edit profile</S.Btn>                        
                    </S.DivBtn>
                    <S.DivContent>
                        <S.ProfileImg src={profile} alt="" />
                        <S.ContentName>Davide Biscuso</S.ContentName>
                        <S.ContentNick>@biscuttu</S.ContentNick>
                        <S.ContentParagraph>Product Desing</S.ContentParagraph>
                        <S.Information>
                            <S.Icon src={Localization} alt="" />
                            <S.ContentText>London</S.ContentText>
                            <S.Icon src={calendar} alt="" />
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
            {tweet.map((item) =>(
                    <S.post__tweet>
                        <S.tweet__figure>
                            <S.tweet__figure__img src="./src/assets/imgs/main/profileDevon.svg" alt="Image of a woman with blonde hair, brown coat and white blouse"/>
                        </S.tweet__figure>
                        <S.tweet__main >
                            <S.tweet__main__user >
                                <S.name__text>Devon Lane</S.name__text>
                                <S.name__nick>@johndue</S.name__nick>
                                <S.name__dot >·</S.name__dot>
                                <S.name__time >{item.time}s</S.name__time>
                            </S.tweet__main__user>
                            <S.tweet__main__content >{item.content}</S.tweet__main__content>
                            <S.tweet__main__media >
                                <S.main__media__img src="./src/assets/imgs/main/astronaut.png" alt="Image of an astronaut in a blue suit in a purple space"/>
                            </S.tweet__main__media>
                            <S.tweet__main__actions >
                                <S.actions__div >
                                    <S.actionsImg src={comment} alt="Bubble chat icon"/>
                                    <span>0</span>
                                </S.actions__div>
                                <S.actions__div >
                                    <S.actionsImg src={retweet} alt="Retweet related two arrow symbol"/>
                                    <span>0</span>
                                </S.actions__div>
                                <S.actions__div>
                                    <S.actionsImg src={likeDisabled} alt="Red heart symbol"/>
                                    <span>0</span>
                                </S.actions__div>
                                <S.actions__div >
                                    <S.actionsImg src={share} alt="An arrow symbol with a dash below, related to sharing the post"/>
                                    <span>0</span>
                                </S.actions__div>
                            </S.tweet__main__actions>
                            <S.tweet__main__show>
                                <S.show__link href="" >
                                    <S.show__paragraph >Show this thread</S.show__paragraph>
                                </S.show__link>
                            </S.tweet__main__show>
                        </S.tweet__main>
                    </S.post__tweet>
                    ))}
        </S.Profile>
    )
}