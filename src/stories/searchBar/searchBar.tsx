import './searchBar.css';

interface searchBarProps {
    name?: string;
}

// import srcOptions from "../assets/profile/options-light.svg"
// input.style.backgroundImage = "url('/assets/imgs/searchBar/search.svg')"
export const SearchBar = ({name}:searchBarProps) => (
    <input className='searchBar' type="text" />
)