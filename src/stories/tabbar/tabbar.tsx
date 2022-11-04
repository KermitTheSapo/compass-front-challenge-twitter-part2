import './tabbarStyle.css';

interface TabbarProps {
  name?: string;
}
export const Tabbar = ({name}:TabbarProps) => (
  <div className='tabbar'>
    <div className='tabbar__Div'>
      <h3 className={`tabbar__Name tabbar__Name--${name}`}>Tweets</h3>
    </div>
    <div className='tabbar__Div'>
      <h3 className={`tabbar__Name tabbar__Name--${name}`}>Tweets & replies</h3>
    </div>
    <div className='tabbar__Div'>
      <h3 className={`tabbar__Name tabbar__Name--${name}`}>Media</h3>
    </div>
    <div className='tabbar__Div'>
      <h3 className={`tabbar__Name tabbar__Name--${name}`}>Likes</h3>
    </div>
  </div>
)