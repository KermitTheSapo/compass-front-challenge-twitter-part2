import './menu-item.css';

interface menuItemProps {
    name?: "house-inverted" | "house-default" | "house-selected";
    color?: "blue" | "dark" | "light",
    size?: 'small' | 'medium' | 'large';
}

export const MenuItem = ({name, size, color}:menuItemProps) => (
    <div className='div-menu-item'>
        <img src={`./src/assets/imgs/menuItem/${name}.svg`} alt="ddd" className="imgIcon" />
        <h1 className={`h1-${name} h1-${size} h1-${color}`}>Home</h1>
    </div>
)