import './menu-item.css';

interface menuItemProps {
    name?: "house-inverted" | "house-default" | "house-selected";
    color?: "blue" | "dark" | "light",
    size?: 'small' | 'medium' | 'large';
}

export const MenuItem = ({name, size, color}:menuItemProps) => (
    <div>
        <h1 className={name}>{size}, {color}aaaa</h1>
    </div>
)