import * as S from "./leftStyle";

import TwitterImg from "../../assets/imgs/asideLeft/white/twitter.svg";
import House from "../../assets/imgs/asideLeft/white/house.svg";
import hashtag from "../../assets/imgs/asideLeft/white/hashtag.svg";
import hashtagDark from "../../assets/imgs/asideLeft/dark/hashtag.svg";
import notification from "../../assets/imgs/asideLeft/white/notification.svg";
import notificationDark from "../../assets/imgs/asideLeft/dark/notifications.svg";
import message from "../../assets/imgs/asideLeft/white/message.svg";
import messageDark from "../../assets/imgs/asideLeft/dark/message.svg";
import bookmark from "../../assets/imgs/asideLeft/white/bookmark.svg";
import bookmarkDark from "../../assets/imgs/asideLeft/dark/bookmark.svg";
import list from "../../assets/imgs/asideLeft/white/list.svg";
import listDark from "../../assets/imgs/asideLeft/dark/list.svg";
import profile from "../../assets/imgs/asideLeft/white/profile.svg";
import profileDark from "../../assets/imgs/asideLeft/dark/profile.svg";
import more from "../../assets/imgs/asideLeft/white/more.svg";
import moreDark from "../../assets/imgs/asideLeft/dark/more.svg";
import profilePicture from "../../assets/imgs/asideLeft/profile/profilePicture.png";
import options from "../../assets/imgs/asideLeft/profile/options.svg"

import { Item } from "./item";
import { focusInput } from "../../utils/Html";
import { useState } from "react";
export default function Left() {

  const [isDark, setIsDark] = useState();
  setInterval(() => {
    let theme = localStorage.getItem("theme")
    // @ts-ignore
    setIsDark(theme.includes("dark"))
  }, 1000)
  let loginData = localStorage.getItem("name") as string
  let passwordData = localStorage.getItem("password") as string
  var loginObj = JSON.parse(loginData)
  var passwordObj = JSON.parse(passwordData)

  return (
    <S.AsideLeft>
      <S.asideLeft__itemList>
        <S.itemList__figure>
          <S.itemList__figureImg
            src={TwitterImg}
            alt="The blue twitter symbol"
          />
        </S.itemList__figure>
        <S.asideLeft__ul>
          <Item label={"Home"} icon={House} alt="The house icon" route="/home" />
          <Item label={"Explore"} icon={isDark ? hashtagDark : hashtag} alt="Gashtag icon" route="/erro" />
          <Item label={"Notification"} icon={isDark ? notificationDark : notification} alt="A bell icon, related to notification" route="/erro" />
          <Item label={"Messages"} icon={isDark ? messageDark : message} alt="An icon of a letter, related to messages" route="/erro" />
          <Item label={"Bookmarks"} icon={isDark ? bookmarkDark : bookmark} alt="A bookmark icon" route="/erro" />
          <Item label={"List"} icon={isDark ? listDark : list} alt="An icon of a sheet with things written on it" route="/erro" />
          <Item label={"Profile"} icon={isDark ? profileDark : profile} alt="A person icon" route="/profile" />
          <Item label={"More"} icon={isDark ? moreDark : more} alt="A circle with 3 dots inside" route="/error" />
        </S.asideLeft__ul>
        <S.btnLargePrimary onClick={() => {
          if (loginObj === "admin" && passwordObj === "admin") {
            focusInput("input")
          } else {
            alert("You are in guest mode, you can't post")
          }
        }} type="button">
          Tweet
        </S.btnLargePrimary>
      </S.asideLeft__itemList>
      <S.asideLeft__profile>
        <S.profile__figure>
          <S.profile__img
            src={profilePicture}
            alt="A profile picture of a person with a black shirt and hair on their face"
          />
        </S.profile__figure>
        <S.profile__content>
          <S.content__name>Jerome Bell</S.content__name>
          <S.content__nick>@afonsoinocente</S.content__nick>
        </S.profile__content>
        <S.profile__options>
          <S.optionsImg src={options} alt="Three black dots" />
        </S.profile__options>
      </S.asideLeft__profile>
    </S.AsideLeft>
  );
}
