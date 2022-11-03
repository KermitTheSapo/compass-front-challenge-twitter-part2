import * as S from "./leftStyle"
import * as R from "react-router-dom"

import TwitterImg from "../../assets/imgs/asideLeft/white/twitter.svg"
import House from "../../assets/imgs/asideLeft/white/house.svg"
import hashtag from "../../assets/imgs/asideLeft/white/hashtag.svg"
import notification from "../../assets/imgs/asideLeft/white/notification.svg"
import message from "../../assets/imgs/asideLeft/white/message.svg"
import bookmark from "../../assets/imgs/asideLeft/white/bookmark.svg"
import list from "../../assets/imgs/asideLeft/white/list.svg"
import profile from "../../assets/imgs/asideLeft/white/profile.svg"
import more from "../../assets/imgs/asideLeft/white/more.svg"


import profilePicture from "../../assets/imgs/asideLeft/profile/profilePicture.png"
import options from "../../assets/imgs/asideLeft/profile/options.svg"
import Main from "../main/main"
import Profile from "../profile/profile"

export default function Left(){
    return(
        <R.BrowserRouter>
            <S.AsideLeft>
                <S.asideLeft__itemList>
                    <S.itemList__figure>
                        <S.itemList__figureImg src={TwitterImg} alt="The blue twitter symbol"/>
                    </S.itemList__figure>
                        <S.asideLeft__ul>
                            <S.asideLeft__link>
                                <S.asideLeft__List>
                                    <S.List__figure>
                                        <S.List__img src={House} alt="The symbol of a blue house"/>
                                    </S.List__figure>
                                    <S.List__content><S.LinkStyle to="/">Home</S.LinkStyle></S.List__content>
                                </S.asideLeft__List>
                            </S.asideLeft__link>
                            <S.asideLeft__link>
                                <S.asideLeft__List>
                                    <S.List__figure>
                                        <S.List__img src={hashtag} alt="The symbol of a blue house"/>
                                    </S.List__figure>
                                    <S.List__content>Explore</S.List__content>
                                </S.asideLeft__List>
                            </S.asideLeft__link>
                            <S.asideLeft__link>
                                <S.asideLeft__List>
                                    <S.List__figure>
                                        <S.List__img src={notification} alt="The symbol of a blue house"/>
                                    </S.List__figure>
                                    <S.List__content>Notifications</S.List__content>
                                </S.asideLeft__List>
                            </S.asideLeft__link>
                            <S.asideLeft__link>
                                <S.asideLeft__List>
                                    <S.List__figure>
                                        <S.List__img src={message} alt="The symbol of a blue house"/>
                                    </S.List__figure>
                                    <S.List__content>Messages</S.List__content>
                                </S.asideLeft__List>
                            </S.asideLeft__link>
                            <S.asideLeft__link>
                                <S.asideLeft__List>
                                    <S.List__figure>
                                        <S.List__img src={bookmark} alt="The symbol of a blue house"/>
                                    </S.List__figure>
                                    <S.List__content>Bookmarks</S.List__content>
                                </S.asideLeft__List>
                            </S.asideLeft__link>
                            <S.asideLeft__link>
                                <S.asideLeft__List>
                                    <S.List__figure>
                                        <S.List__img src={list} alt="The symbol of a blue house"/>
                                    </S.List__figure>
                                    <S.List__content>Lists</S.List__content>
                                </S.asideLeft__List>
                            </S.asideLeft__link>
                            <S.asideLeft__link>
                                <S.asideLeft__List>
                                    <S.List__figure>
                                        <S.List__img src={profile} alt="The symbol of a blue house"/>
                                    </S.List__figure>
                                    <S.List__content><S.LinkStyle to="/profile">Profile</S.LinkStyle></S.List__content>
                                </S.asideLeft__List>
                            </S.asideLeft__link>
                            <S.asideLeft__link>
                                <S.asideLeft__List>
                                    <S.List__figure>
                                        <S.List__img src={more} alt="The symbol of a blue house"/>
                                    </S.List__figure>
                                    <S.List__content>More</S.List__content>
                                </S.asideLeft__List>
                            </S.asideLeft__link>
                        </S.asideLeft__ul>
                    <S.btnLargePrimary type="button">Tweet</S.btnLargePrimary>
                </S.asideLeft__itemList>
                <S.asideLeft__profile>
                    <S.profile__figure>
                        <S.profile__img src={profilePicture} alt="A profile picture of a person with a black shirt and hair on their face"/>
                    </S.profile__figure>
                    <S.profile__content>
                        <S.content__name>Jerome Bell</S.content__name>
                        <S.content__nick>@afonsoinocente</S.content__nick>
                    </S.profile__content>
                    <S.profile__options>
                        <S.optionsImg src={options} alt="Three black dots"/>
                    </S.profile__options>
                </S.asideLeft__profile>
            </S.AsideLeft>
            <R.Routes>
                <R.Route path='/' element={<Main />} />
                <R.Route path='/profile' element={<Profile />} />
          </R.Routes>
        </R.BrowserRouter>
    )
}