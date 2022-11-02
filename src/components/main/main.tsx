import * as S from "./mainStyle"

import darkLightMode from "../../assets/imgs/main/darkLightMode.svg"
import profile from "../../assets/imgs/main/profile.png"
import imgIcon from "../../assets/imgs/main/imgIcon.svg"
import gifIcon from "../../assets/imgs/main/gifIcon.svg"
import graphIcon from "../../assets/imgs/main/graphIcon.svg"
import emojiIcon from "../../assets/imgs/main/emojiIcon.svg"
import CalendarIcon from "../../assets/imgs/main/CalendarIcon.svg"

import comment from "../../assets/imgs/main/comment.svg"
import retweet from "../../assets/imgs/main/retweet.svg"
import likeDisabled from "../../assets/imgs/main/like-disabled.svg"
import share from "../../assets/imgs/main/share.svg"



export default function Main(){
    return(
        <S.Main>
            <S.main__header>
                <S.main__header__title>Home</S.main__header__title>
                <S.main__header__img src={darkLightMode} alt="Three blue stars"/>
            </S.main__header>
            <S.main__borderHeader></S.main__borderHeader>
            <S.Post>
                <S.post__form action="" method="post">
                    <S.post__input >
                        <S.input__img src={profile} alt="A profile picture of a person with a black shirt and hair on their face"/>
                        <S.input__text type="text" placeholder="What's happening?"/>
                        {/*  minlength="1" maxlength="380" */}
                    </S.post__input>
                    <S.post__emoji>
                        <S.emoji__div>
                            <S.label>
                                {/* for="upload" */}
                                <S.LabelImg src={imgIcon} alt="Blue icon of a landscape and sun related to image upload"/>
                            </S.label>
                            <S.upload__img id="upload" type="file" name="file" accept="image/png, image/jpeg" multiple />
                            <S.icons src={gifIcon} alt="A square with 'GIF' inside"/>
                            <S.icons src={graphIcon} alt="A chart icon"/>
                            <S.icons src={emojiIcon} alt="Happy face icon"/>
                            <S.icons src={CalendarIcon} alt="Calendar icon"/>
                        </S.emoji__div>
                        <S.post__submit>Tweet</S.post__submit>
                    </S.post__emoji>
                </S.post__form>
                <S.main__borderScroll></S.main__borderScroll>
                <S.main__margin>
                    <S.post__tweet>
                        <S.tweet__figure>
                            <S.tweet__figure__img src="./src/assets/imgs/main/profileDevon.svg" alt="Image of a woman with blonde hair, brown coat and white blouse"/>
                        </S.tweet__figure>
                        <S.tweet__main >
                            <S.tweet__main__user >
                                <S.name__text >Devon Lane</S.name__text>
                                <S.name__nick>@johndue</S.name__nick>
                                <S.name__dot >·</S.name__dot>
                                <S.name__time >23s</S.name__time>
                            </S.tweet__main__user>
                            <S.tweet__main__content >Tom is in a big hurry.</S.tweet__main__content>
                            <S.tweet__main__media >
                                <S.main__media__img src="./src/assets/imgs/main/astronaut.png" alt="Image of an astronaut in a blue suit in a purple space"/>
                            </S.tweet__main__media>
                            <S.tweet__main__actions >
                                <S.actions__div >
                                    <S.actionsImg src={comment} alt="Bubble chat icon"/>
                                    <span>61</span>
                                </S.actions__div>
                                <S.actions__div >
                                    <S.actionsImg src={retweet} alt="Retweet related two arrow symbol"/>
                                    <span>12</span>
                                </S.actions__div>
                                <S.actions__div>
                                    <S.actionsImg src={likeDisabled} alt="Red heart symbol"/>
                                    <span>0</span>
                                </S.actions__div>
                                <S.actions__div >
                                    <S.actionsImg src={share} alt="An arrow symbol with a dash below, related to sharing the post"/>
                                    <span>61</span>
                                </S.actions__div>
                            </S.tweet__main__actions>
                            <S.tweet__main__show>
                                <S.show__link href="" >
                                    <S.show__paragraph >Show this thread</S.show__paragraph>
                                </S.show__link>
                            </S.tweet__main__show>
                        </S.tweet__main>
                    </S.post__tweet>
                    <S.main__borderScrolll></S.main__borderScrolll>
                    
                </S.main__margin>
                <S.Margin></S.Margin>
            </S.Post>
        </S.Main>
    )
}