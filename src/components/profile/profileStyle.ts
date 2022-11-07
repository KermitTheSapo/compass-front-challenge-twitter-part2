import styled from "styled-components";

export const Profile = styled.main`
    min-height: 80vh;
    background-color: var(--White);
    width: 45vw;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
`

export const Header = styled.header`
    position: fixed;
    top: 0px;
    width: 45vw;
    border: 1px solid var(--Dark7);
    display: flex;
    align-items: center;
    height: 53px;
    background-color: white;
`


export const Header__figure = styled.figure`
    margin-left: 19px;
    margin-right: 38px;
`

export const Figure__img = styled.img`

`

export const Header__content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
`
export const Content__name = styled.h2`
    font-weight: 700;
    font-size: 1.188rem;
    color: var(--Black);
`
export const Content__tweet = styled.p`
    font-weight: 500;
    font-size: 0.813rem;
    color: var(--Dark5);
`

export const MainProfile = styled.main`
    margin-top: 54px;
    width: 100%;
`

export const MainProfile__background = styled.figure`
    width: 100%;
    height: 200px;
`

export const BackgroundImg = styled.img`
    width: 100%;
    height: 200px;
`

export const MainProfile__content = styled.div`

`

export const DivBtn = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 50px;

`
export const Btn = styled.button`
    height: 30px;
    width: 112px;
    border-radius: 9999px;
    border: 1px solid var(--PrimaryBlue);
    color: var(--PrimaryBlue);
    background-color: transparent;
    font-weight: 700;
    font-size: 0.938rem;
`
export const DivContent = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    height: 25vh;
`
export const ContentName = styled.h1`
    font-weight: 700;
    font-size: 1.313rem;
    color: var(--Black);
`
export const ContentNick = styled.h3`
    font-weight: 500;
    font-size: 1rem;
    color: var(--Dark5);

`
export const ContentParagraph = styled.h2`
    font-weight: 500;
    font-size: 1rem;
    color: var(--Black);
`
export const Information = styled.div`
    display: flex;
    width: 300px;
    align-items: center;
    justify-content: flex-start;
    gap: 7px;
`
export const Icon = styled.img`
    height: 15.5px;
    width: 14.5px;
`
export const ContentText = styled.h3`
    font-weight: 500;
    font-size: 1rem;
    color: var(--Dark5);
`
export const Follow = styled.div`
    display: flex;
    width: 250px;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;
`
export const Number = styled.h4`
    font-weight: 700;
    font-size: 1rem;
    color: var(--Black);
`
export const Tabbar = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 53px;
`
export const TabbarDiv = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover{
        color: var(--PrimaryBlue);
        border-bottom: 2px solid var(--PrimaryBlue);
    }
    &::selection{
        border-bottom: 2px solid var(--PrimaryBlue);
    }
`

export const TabbarName = styled.h3`
    font-weight: 700;
    font-size: 1rem;
    color: var(--Black);
`

export const ProfileImg = styled.img`
    border-radius: 100%;
    border: 5px solid var(--Black);
    position: absolute;
    z-index: 2px;
    top: 150px;
    left: 400px;
`
