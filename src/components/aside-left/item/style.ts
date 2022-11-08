import { Link } from 'react-router-dom';
import styled from "styled-components"


export const asideLeft__List = styled.div.attrs((/* props */) => ({ tabIndex: 0 }))`
    width: auto;
    display: flex;
    align-items: center;
    justify-content: start;
    height: 30px;
    gap: 10px;
    cursor: pointer;
    color: ${props => props.theme.colors.text};
    &:hover {
        color: ${props => props.theme.colors.primary};
    }
`

export const List__figure = styled.figure`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-width: 40px;
`

export const List__img = styled.img`

`

export const List__content = styled.span`
    height: 100%;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-weight: 700;
    font-size: 1.188rem;
`


export const asideLeft__link = styled.a`
    text-decoration: none;
`

export const LinkStyle = styled(Link)`
    text-decoration: none;
    color: ${props => props.theme.colors.text};
`