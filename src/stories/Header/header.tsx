import './headerStyle.css';

interface HeaderProps {
  name?: string;
}
export const Header = ({name}:HeaderProps) => (
  <div className='header'>
    <div className='header__top'>
      <h2 className={`header__home header__home--${name}`}>Home</h2>
      <img className='header__mode' src="src\assets\imgs\main\darkLightMode.svg" alt="" />
    </div>
    <div className='header__main'>
      <img className='header__arrow' src="src\assets\imgs\profileComponent\arrow.svg" alt="" />
      <div className='header__content'>
        <h2 className={`header__name header__name--${name}`}>Name</h2>
        <p className='header__tweets'>9 Tweets</p>
      </div>
    </div>
  </div>
)
