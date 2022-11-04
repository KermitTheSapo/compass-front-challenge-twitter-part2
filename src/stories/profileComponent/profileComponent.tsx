import * as S from "./profileComponentStyle";
import "./profileStyle.css"

import Arrow from "../../assets/imgs/profileComponent/arrow.svg";
import Background from "../../assets/imgs/profileComponent/backgroundImg.png";
import Localization from "../../assets/imgs/profileComponent/localization.svg";
import calendar from "../../assets/imgs/profileComponent/calendar.svg";
import profile from "../../assets/imgs/profileComponent/ProfilePicture.png";

interface ProfileProps {
  name?: string;
}

export const Profile = ({ name }: ProfileProps) => (
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
          <S.ContentName className={`${name}`}>Davide Biscuso</S.ContentName>
          <S.ContentNick>@biscuttu</S.ContentNick>
          <S.ContentParagraph className={`${name}`}>Product Desing</S.ContentParagraph>
          <S.Information>
            <S.Icon src={Localization} alt="" />
            <S.ContentText>London</S.ContentText>
            <S.Icon src={calendar} alt="" />
            <S.ContentText>Joined September 2011</S.ContentText>
          </S.Information>
          <S.Follow>
            <S.Number className={`${name}`}>569</S.Number>
            <S.ContentText>Following</S.ContentText>
            <S.Number className={`${name}`}>569</S.Number>
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
  </S.Profile>
);
