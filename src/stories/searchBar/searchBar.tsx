import './searchBar.css';

interface searchBarProps {
    name?: string;
}


export const SearchBar = ({name}:searchBarProps) => (
    <input className={`searchBar input-${name}`} type="text" />
)