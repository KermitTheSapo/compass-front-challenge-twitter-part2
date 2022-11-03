import styled from "styled-components";


import search from "../../assets/imgs/asideRight/search.svg"

export const asideRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 25vw;
    font-family: 'Nunito', sans-serif;
    height: 92.3vh;
    position: fixed;
    right: 0;
`

export const asideRight__input = styled.input`
    width: 300px;
    background-image: url(${search});
    background-repeat: no-repeat;
    background-position: 10px 12px;
    padding-left: 40px;
    min-height: 40px;
    border-radius: 3rem;
    display: flex;
    align-items: center;
    font-size: 1rem;
    background-color: var(--Dark7);
    margin-top: 10px;
    margin-bottom: 15px;
    border: none;
`

export const Happening = styled.section`
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-direction: column;
    width: 350px;
    background-color: var(--Dark8);
    border-radius: 16px;
    margin-bottom: 15px;
`

export const happening__title = styled.h2`
    font-weight: 700;
    font-size: 1.25rem;
    color: var(--Black);
    padding-left: 15px;
    padding-top: 11px;
    padding-bottom: 10px;
`

export const happening__border = styled.div`
    height: 1px;
    width: 100%;
    background-color: var(--Dark7);
`

export const happening__news = styled.div`
    display: flex;
    height: 120px;
    padding-left: 15px;
`

export const news__div = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    height: 100%;
`

export const news__content = styled.div`` 

export const news__content__theme = styled.p`
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--Dark5);
    margin-bottom: 6px;
` 

export const news__content__title = styled.h3`
    font-weight: 700;
    font-size: 0.938rem;
    color: var(--Black);
    line-height: 17.9px;
` 
export const news__content__div=  styled.div`
    display: flex;
` 
export const content__trending = styled.p`
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--Dark5);
    padding-right: 4px;
` 

export const content__hashtag = styled.p`
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--PrimaryBlue);
` 

export const news__figure = styled.figure`
     display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 90%;
    width: 100%;
    padding-top: 10px;
` 

export const figure__img = styled.img`
    border-radius: 10px;
` 


export const happening__showMore = styled.div`
    height: 5vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 15px;
`

export const showMore__link = styled.a`
    text-decoration: none;
`

export const showMore__name = styled.h4`
    color: var(--PrimaryBlue);
    font-size: 0.938rem;
`

export const follow = styled.section`
    background-color: var(--Dark8);
    width: 350px;
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
    flex-direction: column;
    height: 300px;
    border-radius: 16px;
`

export const follow__title = styled.h3`
    font-weight: 700;
    font-size: 1.25rem;
    color: var(--Black);
    margin-left: 16px;
`

export const follow__border = styled.div`
    height: 1px;
    width: 100%;
    background-color: var(--Dark7);
`

export const follow__content = styled.div`
    display: flex;
    align-items: center;
    width: 100%; 
`

export const content__figure = styled.figure`
    
`

export const content__figure__img = styled.img`
    border-radius: 50%;
    margin-left: 16px;
`

export const follow__content__div = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
`

export const follow__content__name = styled.h4`
    font-weight: 700;
    font-size: 1rem;
    color: var(--Black);
    margin-left: 11px;
`

export const follow__content__nick = styled.p`
    font-weight: 500;
    font-size: 1rem;
    color: var(--Dark5);
    margin-left: 11px;
`

export const div__button = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    margin-right: 16px;
`

export const follow__link = styled.a`
    text-decoration: none;
    margin-left: 15px;
`

export const content__button = styled.button`
    color: var(--PrimaryBlue);
    font-size: 0.938rem;
    background-color: transparent;
    color: var(--PrimaryBlue);
    border: solid 1px var(--PrimaryBlue);
    width: 80px;
    height: 30px;
    border-radius: 3rem;
    font-size: 0.938rem;
    font-weight: 700;
    align-items: center;

    &:hover{
        background-color: var(--PrimaryBlue);
        color: var(--White);
        border: solid 1px var(--White);
    }
`

export const follow__more = styled.h4`
    color: var(--PrimaryBlue);
    font-size: 0.938rem;
`

export const follow__terms = styled.p`
    font-weight: 500;
    font-size: 0.813rem;
    width: 80%;
    margin-top: 15px;
`




