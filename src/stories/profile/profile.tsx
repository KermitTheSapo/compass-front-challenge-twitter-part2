import './profile.css';

interface profileProps {
    name?: string;
}
import srcProfile from "../../assets/imgs/profile/avatar-small.png"

export const Profile = ({name}:profileProps) => (
    <div className="div-profile">
        <figure className="profile__figure">
            <img className="profile__img" src={srcProfile} alt="A profile picture of a person with a black shirt and hair on their face"/>
        </figure>
        <div className={`profile__content`}>
            <h3 className={`profile-${name}`}>Jerome Bell</h3>
            <h4 className={`paragraph-${name}`}>@afonsoinocente</h4>
        </div>
        <figure className="profile__options">
          <img src={`./src/assets/imgs/profile/options-${name}.svg`} alt="Three black dots"/>
        </figure>
    </div>
)