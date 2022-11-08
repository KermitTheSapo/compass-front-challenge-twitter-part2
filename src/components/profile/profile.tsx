import * as S from "./profileStyle"
import Arrow from "../../assets/imgs/profileComponent/arrow.svg"
import Background from "../../assets/imgs/profileComponent/backgroundImg.png"
import Localization from "../../assets/imgs/profileComponent/localization.svg"
import calendar from "../../assets/imgs/profileComponent/calendar.svg"
import profile from "../../assets/imgs/profileComponent/ProfilePicture.png"
import Post from "../post/post"
export default function Profile(){
    let postData = localStorage.getItem("post")
    var postObj = JSON.parse(postData)
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
            <S.DivPost>
                
                {postObj && postObj.map((data) => <Post data={data}/>)}  
            </S.DivPost>    
            {/* {postObj.map((item) =>(
                    <P.post__tweet>
                        <P.tweet__figure>
                            <P.tweet__figure__img src="./src/assets/imgs/main/profileDevon.svg" alt="Image of a woman with blonde hair, brown coat and white blouse"/>
                        </P.tweet__figure>
                        <P.tweet__main >
                            <P.tweet__main__user >
                                <P.name__text>Devon Lane</P.name__text>
                                <P.name__nick>@johndue</P.name__nick>
                                <P.name__dot >·</P.name__dot>
                                <P.name__time >{item.name}s</P.name__time>
                            </P.tweet__main__user>
                            <P.tweet__main__content >{item.content}</P.tweet__main__content>
                            <P.tweet__main__media >
                                <P.main__media__img src="./src/assets/imgs/main/astronaut.png" alt="Image of an astronaut in a blue suit in a purple space"/>
                            </P.tweet__main__media>
                            <P.tweet__main__actions >
                                <P.actions__div >
                                    <P.actionsImg src={comment} alt="Bubble chat icon"/>
                                    <span>0</span>
                                </P.actions__div>
                                <P.actions__div >
                                    <P.actionsImg src={retweet} alt="Retweet related two arrow symbol"/>
                                    <span>0</span>
                                </P.actions__div>
                                <P.actions__div>
                                    <P.actionsImg src={likeDisabled} alt="Red heart symbol"/>
                                    <span>0</span>
                                </P.actions__div>
                                <P.actions__div >
                                    <P.actionsImg src={share} alt="An arrow symbol with a dash below, related to sharing the post"/>
                                    <span>0</span>
                                </P.actions__div>
                            </P.tweet__main__actions>
                            <P.tweet__main__show>
                                <P.show__link href="" >
                                    <P.show__paragraph >Show this thread</P.show__paragraph>
                                </P.show__link>
                            </P.tweet__main__show>
                        </P.tweet__main>
                    </P.post__tweet>
                    ))} */}
        </S.Profile>
    )
}