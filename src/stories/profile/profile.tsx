import './profile.css';
import * as S from "../../components/aside-left/leftStyle"

interface profileProps {
    name?: string;
}
import srcProfile from "../assets/profile/avatar-small.png"
import srcOptions from "../assets/profile/options-light.svg"

export const Profile = ({name}:profileProps) => (
    <div className="aside-left__profile">
        <figure className="profile__figure">
            <img className="profile__img" src={srcProfile} alt="A profile picture of a person with a black shirt and hair on their face"/>
        </figure>
        <div className="profile__content">
            <h3 className="content__name">Jerome Bell</h3>
            <h4 className="content__nick">@afonsoinocente</h4>
        </div>
        <figure className="profile__options">
          <img src={srcOptions} alt="Three black dots"/>
        </figure>
    </div>
)