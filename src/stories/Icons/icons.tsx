import './iconsStyle.css';

interface menuItemProps {
    name?: "twitter" | "house" | "arrow" | "bookmarks" | "calendar" | "comment" | "date" | "dots" | "emoji" | "explore" | "gif" | "graph" | "heart" | "img" | "lists" | "location" | "message" | "mode" | "more" | "notification" | "profile" | "retweet" | "search" | "share" | "twitter";
    color?: "dark" | "light"
}

export const Icons = ({name, color}:menuItemProps) => (
    <img src={`./src/stories/assets/icons/${name}-${color}.svg`} alt="asdfasdf" className={`icon`} />
)