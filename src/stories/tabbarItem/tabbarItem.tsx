import './tabbarItemStyle.css';

interface TabbarItemProps {
  name?: string;
}
export const TabbarItem = ({name}:TabbarItemProps) => (
  <div className='tabbar'>
    <div className='tabbar__Div'>
      <h3 className={`tabbar__Name tabbar__Name--${name}`}>Tweets</h3>
    </div>
  </div>
)