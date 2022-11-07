import * as S from "./leftStyle";

import TwitterImg from "../../assets/imgs/asideLeft/white/twitter.svg";
import House from "../../assets/imgs/asideLeft/white/house.svg";
import hashtag from "../../assets/imgs/asideLeft/white/hashtag.svg";
import notification from "../../assets/imgs/asideLeft/white/notification.svg";
import message from "../../assets/imgs/asideLeft/white/message.svg";
import bookmark from "../../assets/imgs/asideLeft/white/bookmark.svg";
import list from "../../assets/imgs/asideLeft/white/list.svg";
import profile from "../../assets/imgs/asideLeft/white/profile.svg";
import more from "../../assets/imgs/asideLeft/white/more.svg";

import profilePicture from "../../assets/imgs/asideLeft/profile/profilePicture.png";
import options from "../../assets/imgs/asideLeft/profile/options.svg"
import { Item } from "./item";
import { focusInput } from "../../helps/Html";
export default function Left() {
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
          <Item label={"Home"} icon={House} alt="" route="/home" />
          <Item label={"Explore"} icon={hashtag} alt="" route="/erro" />
          <Item
            label={"Notification"}
            icon={notification}
            alt=""
            route="/erro"
          />
          <Item label={"Messages"} icon={message} alt="" route="/erro" />
          <Item label={"Bookmarks"} icon={bookmark} alt="" route="/erro" />
          <Item label={"List"} icon={list} alt="" route="/erro" />
          <Item label={"Profile"} icon={profile} alt="" route="/profile" />
          <Item
            label={"More"}
            icon={more}
            alt="The symbol of a blue house"
            route="/error"
          />
        </S.asideLeft__ul>
        <S.btnLargePrimary onClick={() => focusInput("input")} type="button">
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
