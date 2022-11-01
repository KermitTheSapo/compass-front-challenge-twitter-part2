import styled from "styled-components";

export const AsideLeft = styled.aside`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 25vw;
    height: 92vh;
    flex-direction: column;
    font-family: 'Nunito', sans-serif;
    position: fixed;
    left: 0;
`
export const asideLeft__itemList = styled.div`
    width: 80%;
    height: 80%;
    display: flex;
    flex-direction: column;
    gap: 33px;
    align-items: center;
`

export const itemList__figure = styled.figure`
    height: 5%;
    padding-top: 15px;
    display: flex;
    align-items: center;
    justify-content: start;
    width: 75%;
`

export const itemList__figureImg = styled.img`
    width: 30px;
`

export const asideLeft__ul = styled.ul`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    height: 410px;
    width: 75%;
`

export const asideLeft__link = styled.a`
    text-decoration: none;
`

export const asideLeft__List = styled.li`
    width: auto;
    display: flex;
    align-items: center;
    justify-content: start;
    height: 30px;
    gap: 10px;
    cursor: pointer;
    color: var(--Black);
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

export const btnLargePrimary = styled.button`
font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  color: var(--White);
  background-color: var(--PrimaryBlue);
  width: 228px;
  height: 49px;
  padding: 15px, 93px, 15px, 93px;
  font-size: 0.938rem;
  outline:none;
`

export const asideLeft__profile = styled.div`
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 80%;
`

export const profile__figure = styled.figure`

`

export const profile__img = styled.img`
border-radius: 100%;
`

export const profile__content = styled.div`

`
export const content__name = styled.h3`
    font-size: 1rem;
    font-weight: 700;
    color: var(--Black);
`
export const content__nick = styled.h4`
    font-weight: 500;
    font-size: 1rem;
    color: var(--Dark5);
`

export const profile__options = styled.figure`

`

export const optionsImg = styled.img`

`


// export const XXXXXXX = styled.XXXX``
