import './sideMenuStyle.css';

interface sideMenuProps {
  name?: string;
}



export const SideMenu = ({name}:sideMenuProps) => (
  <aside className="aside-left">
    <div className="aside-left__itemList">
      <figure className="itemList__figure">
        <img className="itemList__figure--img" src={`./src/assets/imgs/sideMenu/twitter-${name}.svg`} alt="The blue twitter symbol"/>
      </figure>
      <ul className="aside-left__ul">
        <li className="aside-left__List aside-left__List--home">
          <figure className="List__figure">
            <img className="List__img List__img--house" src={`./src/assets/imgs/sideMenu/house.svg`} alt="The symbol of a blue house"/>
          </figure>
          <span className={`List__content actived list__content--${name}`}>Home</span>
        </li>
        <li className="aside-left__List aside-left__List--explore">
          <figure className="List__figure">
            <img className="List__img List__img--hastag" src={`./src/assets/imgs/sideMenu/hashtag-${name}.svg`} alt="The black hashtag symbol"/>
          </figure>
          <span className={`List__content list__content--${name}`}>Explore</span>
        </li>
        <li className="aside-left__List aside-left__List--notifications">
          <figure className="List__figure">
            <img className="List__img List__img--notification" src={`./src/assets/imgs/sideMenu/notifications-${name}.svg`} alt="The symbol of a black bell, related to notification"/>
          </figure>
          <span className={`List__content list__content--${name}`}>Notifications</span>
        </li>
        <li className="aside-left__List aside-left__List--message">
          <figure className="List__figure">
            <img className="List__img List__img--message" src={`./src/assets/imgs/sideMenu/messages-${name}.svg`} alt="The symbol of a black letter, related to messages"/>
          </figure>
          <span className={`List__content list__content--${name}`}>Messages</span>
        </li>
        <li className="aside-left__List aside-left__List--bookmarks">
          <figure className="List__figure">
            <img className="List__img List__img--bookmark" src={`./src/assets/imgs/sideMenu/bookmarks-${name}.svg`} alt="The symbol of a black bookmarks"/>
          </figure>
          <span className={`List__content list__content--${name}`}>Bookmarks</span>
        </li>
        <li className="aside-left__List aside-left__List--lists">
          <figure className="List__figure">
            <img className="List__img List__img--list" src={`./src/assets/imgs/sideMenu/lists-${name}.svg`} alt="A black symbol of a paper with black scribbles"/>
          </figure>
          <span className={`List__content list__content--${name}`}>Lists</span>
        </li>
        <li className="aside-left__List aside-left__List--profile">
          <figure className="List__figure">
            <img className="List__img List__img--profile" src={`./src/assets/imgs/sideMenu/profile-${name}.svg`} alt="A black symbol of a profile or person"/>
          </figure>
          <span className={`List__content list__content--${name}`}>Profile</span>
        </li>
        <li className="aside-left__List aside-left__List--more">
          <figure className="List__figure">
            <img className="List__img List__img--more" src={`./src/assets/imgs/sideMenu/more-${name}.svg`} alt="A black circle with 3 dots inside"/>
          </figure>
          <span className={`List__content list__content--${name}`}>More</span>
        </li>
      </ul>
      <button type="button" className="storybook-button storybook-button--large storybook-button--primary">Tweet</button>
    </div>
    <div className="aside-left__profile">
      <figure className="profile__figure">
        <img className="profile__img" src={`./src/assets/imgs/sideMenu/avatar-small.png`} alt="A profile picture of a person with a black shirt and hair on their face"/>
      </figure>
      <div className="profile__content">
        <h3 className={`content__name content__name--${name}`}>Jerome Bell</h3>
        <h4 className={`content__nick content__nick--${name}`}>@afonsoinocente</h4>
      </div>
      <figure className="profile__options">
        <img src={`./src/assets/imgs/sideMenu/options-${name}.svg`} alt="Three black dots"/>
      </figure>
    </div>
  </aside>
)