import './sideMenuStyle.css';

interface sideMenuProps {
  name?: string;
}
import twitter from "../assets/sideMenu/twitter-light.svg"
import home from "../assets/sideMenu/house.svg"
import explore from "../assets/sideMenu/hashtag-light.svg"
import notifications from "../assets/sideMenu/notifications-light.svg"
import messages from "../assets/sideMenu/messages-light.svg"
import bookmarks from "../assets/sideMenu/bookmarks-light.svg"
import lists from "../assets/sideMenu/lists-light.svg"
import profile from "../assets/sideMenu/profile-light.svg"
import more from "../assets/sideMenu/more-light.svg"
import options from "../assets/sideMenu/options-light.svg"
import avatarSmall from "../assets/sideMenu/avatar-small.png"
import { Button } from '../button/Button';

export const SideMenu = ({name}:sideMenuProps) => (
  <aside className="aside-left">
    <div className="aside-left__itemList">
      <figure className="itemList__figure">
        <img className="itemList__figure--img" src={twitter} alt="The blue twitter symbol"/>
      </figure>
      <ul className="aside-left__ul">
        <li className="aside-left__List aside-left__List--home">
          <figure className="List__figure">
            <img className="List__img List__img--house" src={home} alt="The symbol of a blue house"/>
          </figure>
          <span className="List__content actived list__content--${name}">Home</span>
        </li>
        <li className="aside-left__List aside-left__List--explore">
          <figure className="List__figure">
            <img className="List__img List__img--hastag" src={explore} alt="The black hashtag symbol"/>
          </figure>
          <span className="List__content list__content--${name}">Explore</span>
        </li>
        <li className="aside-left__List aside-left__List--notifications">
          <figure className="List__figure">
            <img className="List__img List__img--notification" src={notifications} alt="The symbol of a black bell, related to notification"/>
          </figure>
          <span className="List__content list__content--${name}">Notifications</span>
        </li>
        <li className="aside-left__List aside-left__List--message">
          <figure className="List__figure">
            <img className="List__img List__img--message" src={messages} alt="The symbol of a black letter, related to messages"/>
          </figure>
          <span className="List__content list__content--${name}">Messages</span>
        </li>
        <li className="aside-left__List aside-left__List--bookmarks">
          <figure className="List__figure">
            <img className="List__img List__img--bookmark" src={bookmarks} alt="The symbol of a black bookmarks"/>
          </figure>
          <span className="List__content list__content--${name}">Bookmarks</span>
        </li>
        <li className="aside-left__List aside-left__List--lists">
          <figure className="List__figure">
            <img className="List__img List__img--list" src={lists} alt="A black symbol of a paper with black scribbles"/>
          </figure>
          <span className="List__content list__content--${name}">Lists</span>
        </li>
        <li className="aside-left__List aside-left__List--profile">
          <figure className="List__figure">
            <img className="List__img List__img--profile" src={profile} alt="A black symbol of a profile or person"/>
          </figure>
          <span className="List__content list__content--${name}">Profile</span>
        </li>
        <li className="aside-left__List aside-left__List--more">
          <figure className="List__figure">
            <img className="List__img List__img--more" src={more} alt="A black circle with 3 dots inside"/>
          </figure>
          <span className="List__content list__content--${name}">More</span>
        </li>
      </ul>
      <button type="button" className="storybook-button storybook-button--large storybook-button--primary">Tweet</button>
    </div>
    <div className="aside-left__profile">
      <figure className="profile__figure">
        <img className="profile__img" src={avatarSmall} alt="A profile picture of a person with a black shirt and hair on their face"/>
      </figure>
      <div className="profile__content">
        <h3 className="content__name content__name--${name}">Jerome Bell</h3>
        <h4 className="content__nick content__nick--${name}">@afonsoinocente</h4>
      </div>
      <figure className="profile__options">
        <img src={options} alt="Three black dots"/>
      </figure>
    </div>
  </aside>
)